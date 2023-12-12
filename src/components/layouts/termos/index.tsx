import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
// estilos
import {
  Container,
  Titulo,
  TituloContainer,
  TermoContainer,
  Termo,
  Texto,
  Foco,
  JulgamentoContainer,
  Julgamento,
  BtnFavorito,
  FavoritoContainer,
} from './style';
// icones
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Componentes
import { BotaoPesquisa } from '../../BotaoPesquisa';
//usuário
import { useAuth } from '../../../contexts/AuthContext';
//API
import Api from '../../../services/api';
import axios from 'axios';

interface Categoria {
  id: number;
  sigla: string;
  descricao: string;
  created_at: string | null;
  updated_at: string | null;
}

interface Foco {
  id: number;
  tipo_id: number;
  nome_eixo: string;
  created_at: string;
  updated_at: string;
}

interface Julgamento {
  id: number;
  tipo_id: number;
  nome_eixo: string;
  created_at: string;
  updated_at: string;
}

interface Acao {
  id: number;
  tipo_id: number;
  nome_eixo: string;
  created_at: string;
  updated_at: string;
}

interface TermoAPI {
  id: number;
  categoria_id: number;
  foco_id: number;
  julgamento_id: number | null;
  acao_id: number | null;
  created_at: string;
  updated_at: string;
  categoria: Categoria;
  foco: Foco;
  julgamento: Julgamento | null;
  acao: Acao | null;
}

interface Favorito {
  id: number;
  usuario_id: number;
  termo_id: number;
  created_at: string | null;
  updated_at: string | null;
  termo?: {
    id: number;
    categoria_id: number;
    foco_id: number;
    julgamento_id: number | null;
    acao_id: number | null;
    created_at: string;
    updated_at: string;
    categoria: {};
    foco: {};
    julgamento: {} | null;
    acao: {} | null;
  };
}

interface TermoData {
  id: string;
  foco: string;
  julgamentos: string[];
}

interface FavoritoDTO {
  usuario_id: number;
  termo_id: number;
}

export interface TermosProps {
  categoria: number;
}

export function Termos(props: TermosProps) {
  const { categoria } = props;
  const [termos, setTermos] = useState<TermoAPI[]>([]);
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [exibirAcoes, setExibirAcoes] = useState<boolean>(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function buscarTermos() {
      try {
        setCarregando(true);
    
        const response = await Api.get<{ data: TermoAPI[]; last_page: number }>('/termos', {
          params: { page: paginaAtual },
        });
    
        const dadosTermos = response.data.data;
        const informacoesPaginacao = response.data;
    
        setTermos([...termos, ...dadosTermos]);
        setTotalPaginas(informacoesPaginacao.last_page);
      } catch (error) {
        console.error('Erro ao buscar termos:', error);
      } finally {
        setCarregando(false);
      }
    }

    async function buscarFavoritos() {
      try {
        const response = await Api.get<Favorito[]>('/favoritos');
        setFavoritos(response.data);
      } catch (error) {
        console.error('Erro ao buscar favoritos:', error);
      }
    }

    buscarTermos();
    buscarFavoritos();
  }, [paginaAtual]);

  const isFavorito = (termoId: number) => {
    return favoritos.some((favorito) => favorito.termo_id === termoId);
  };
  const { userData } = useAuth();
  const toggleFavorito = async (termoId: number) => {
    try {
      const usuarioId: number | undefined = userData?.id;

      if (usuarioId === undefined) {
        console.error('ID do usuário não definido.');
        return;
      }

      const favoritoData: FavoritoDTO = {
        usuario_id: usuarioId,
        termo_id: termoId,
      };

      const response = await Api.post('/Alterar-favoritos', favoritoData);

      if (response.data.status === 'adicionado') {
        const novoFavorito: Favorito = {
          id: response.data.id,
          usuario_id: favoritoData.usuario_id,
          termo_id: favoritoData.termo_id,
          created_at: response.data.created_at,
          updated_at: response.data.updated_at,
          termo: response.data.termo,
        };

        setFavoritos([...favoritos, novoFavorito]);
      } else if (response.data.status === 'removido') {
        setFavoritos(
          favoritos.filter(
            (favorito) => !(favorito.usuario_id === usuarioId && favorito.termo_id === termoId)
          )
        );
      }
    } catch (error: any) {
      console.error('Erro ao adicionar/remover dos favoritos:', error);

      if (axios.isAxiosError(error)) {
        console.error('Detalhes do erro:', error.response?.data);
      }
    }
  };

  return (
    <Container>
      <TituloContainer>
        <Titulo>Termos</Titulo>
      </TituloContainer>
      <TermoContainer>
        <FlatList
          data={termos.filter((termo) => termo.categoria_id === props.categoria)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Termo>
              <Foco>
                <Texto>{item.foco.nome_eixo}</Texto>
              </Foco>
              <JulgamentoContainer>
                <Julgamento>
                  {props.categoria === 1 ? (
                    <Texto>{item.julgamento?.nome_eixo}</Texto>
                    ) : (
                      <Texto>{item.acao?.nome_eixo}</Texto>
                    )}
                </Julgamento>
              </JulgamentoContainer>
              <FavoritoContainer>
                <BtnFavorito onPress={() => toggleFavorito(item.id)}>
                  <MaterialIcons
                    name={isFavorito(item.id) ? 'favorite' : 'favorite-border'}
                    size={30}
                    color={isFavorito(item.id) ? '#BD4F4F' : '#37A69C'}
                  />
                </BtnFavorito>
              </FavoritoContainer>
            </Termo>
          )}
          onEndReached={() => {
            if (paginaAtual < totalPaginas && !carregando) {
              setPaginaAtual(paginaAtual + 1);
            }
          }}
          onEndReachedThreshold={0.1}
        />
      </TermoContainer>
    </Container>
  );
}

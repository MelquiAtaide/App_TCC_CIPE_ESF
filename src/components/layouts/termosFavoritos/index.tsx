// import React, { useState, useEffect } from 'react';
// import { TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
// // estilos
// import {
//   Container,
//   Titulo,
//   TituloContainer,
//   TermoContainer,
//   Termo,
//   Texto,
//   Foco,
//   JulgamentoContainer,
//   Julgamento,
//   BtnFavorito,
//   FavoritoContainer,
// } from './style';
// // icones
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // Componentes
// import { BotaoPesquisa } from '../../BotaoPesquisa';

// //API
// import Api from '../../../services/api'

// interface Categoria {
//   id: number;
//   sigla: string;
//   descricao: string;
//   created_at: string | null;
//   updated_at: string | null;
// }

// interface Foco {
//   id: number;
//   tipo_id: number;
//   nome_eixo: string;
//   created_at: string;
//   updated_at: string;
// }

// interface Julgamento {
//   id: number;
//   tipo_id: number;
//   nome_eixo: string;
//   created_at: string;
//   updated_at: string;
// }

// interface Acao {
//   id: number;
//   tipo_id: number;
//   nome_eixo: string;
//   created_at: string;
//   updated_at: string;
// }

// interface TermoAPI {
//   id: number;
//   categoria_id: number;
//   foco_id: number;
//   julgamento_id: number | null;
//   acao_id: number | null;
//   created_at: string;
//   updated_at: string;
//   categoria: Categoria;
//   foco: Foco;
//   julgamento: Julgamento | null;
//   acao: Acao | null;
// }

// interface Favorito {
//   id: number;
//   usuario_id: number;
//   termo_id: number;
//   created_at: string;
//   updated_at: string;
//   termo: TermoAPI;
// }

// interface TermoData {
//   id: string;
//   foco: string;
//   julgamentos: string[];
// }

// export interface TermosFavoritosProps {}

// export function TermosFavoritos(props: TermosFavoritosProps) {
//   const [termos, setTermos] = useState<TermoAPI[]>([]);
//   const [favoritos, setFavoritos] = useState<Favorito[]>([]);

//   useEffect(() => {
//     async function buscarTermos() {
//       try {
//         const response = await Api.get<TermoAPI[]>('/termos');
//         const termosComJulgamento = response.data.filter((termo: { categoria_id: number; }) => termo.categoria_id === 1);
//         setTermos(termosComJulgamento);
//       } catch (error) {
//         console.error('Erro ao buscar termos:', error);
//       }
//     }

//     async function buscarFavoritos() {
//       try {
//         const response = await Api.get<Favorito[]>('/favoritos'); // Substitua '/favoritos' pela rota correta
//         setFavoritos(response.data);
//       } catch (error) {
//         console.error('Erro ao buscar favoritos:', error);
//       }
//     }

//     buscarTermos();
//     buscarFavoritos();
//   }, []);

//   const agruparTermos = (dados: TermoAPI[]): TermoData[] => {
//     const termosAgrupados: { [key: string]: TermoData } = {};

//     dados.forEach((termo) => {
//       const { foco, julgamento } = termo;

//       if (!termosAgrupados[foco.nome_eixo]) {
//         termosAgrupados[foco.nome_eixo] = {
//           id: termo.id.toString(),
//           foco: foco.nome_eixo,
//           julgamentos: julgamento ? [julgamento.nome_eixo] : [],
//         };
//       } else {
//         termosAgrupados[foco.nome_eixo].julgamentos.push(julgamento ? julgamento.nome_eixo : '');
//       }
//     });

//     return Object.values(termosAgrupados);
//   };

//   const termosAgrupados = agruparTermos(termos);

//   const isFavorito = (termoId: number) => {
//     return favoritos.some((favorito) => favorito.termo_id === termoId);
//   };

//   const toggleFavorito = async (termoId: number) => {
//     try {
//       // Implemente a lógica para adicionar ou remover dos favoritos no backend
//       // Pode ser necessário enviar uma requisição POST ou DELETE para a rota de favoritos
//       console.log(`Toggle favorito para o termo ${termoId}`);
//     } catch (error) {
//       console.error('Erro ao adicionar/remover dos favoritos:', error);
//     }
//   };

//   return (
//     <Container>
//       <TituloContainer>
//         <Titulo>Termos</Titulo>
//       </TituloContainer>
//       <TermoContainer>
//         <FlatList
//           data={termosAgrupados}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <Termo>
//               <Foco>
//                 <Texto>{item.foco}</Texto>
//               </Foco>
//               <JulgamentoContainer>
//                 {item.julgamentos.map((julgamento, index) => (
//                   <Julgamento key={index}>
//                     <Texto>{julgamento}</Texto>
//                   </Julgamento>
//                 ))}
//               </JulgamentoContainer>
//               <FavoritoContainer>
//                 <BtnFavorito onPress={() => toggleFavorito(Number(item.id))}>
//                   <MaterialIcons
//                     name={isFavorito(Number(item.id)) ? 'favorite' : 'favorite-border'}
//                     size={30}
//                     color={isFavorito(Number(item.id)) ? '#BD4F4F' : '#37A69C'}
//                   />
//                 </BtnFavorito>
//               </FavoritoContainer>
//             </Termo>
//           )}
//         />
//       </TermoContainer>
//     </Container>
//   );
// }

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

//API
import Api from '../../../services/api';

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
  created_at: string;
  updated_at: string;
  termo: TermoAPI;
}

interface TermoData {
  id: string;
  foco: string;
  julgamentos: string[];
}

export interface TermosFavoritosProps {}

export function TermosFavoritos(props: TermosFavoritosProps) {
  const [termos, setTermos] = useState<TermoAPI[]>([]);
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);

  useEffect(() => {
    async function buscarTermos() {
      try {
        const response = await Api.get<TermoAPI[]>('/termos');
        setTermos(response.data);
      } catch (error) {
        console.error('Erro ao buscar termos:', error);
      }
    }

    async function buscarFavoritos() {
      try {
        const response = await Api.get<Favorito[]>('/favoritos'); // Substitua '/favoritos' pela rota correta
        setFavoritos(response.data);
      } catch (error) {
        console.error('Erro ao buscar favoritos:', error);
      }
    }

    buscarTermos();
    buscarFavoritos();
  }, []);

  const agruparTermosFavoritos = (): TermoData[] => {
    const termosFavoritos: TermoData[] = [];

    favoritos.forEach((favorito) => {
      const { foco, julgamento } = favorito.termo;

      const termoExistente = termosFavoritos.find((termo) => termo.id === favorito.termo.id.toString());

      if (termoExistente) {
        termoExistente.julgamentos.push(julgamento ? julgamento.nome_eixo : '');
      } else {
        termosFavoritos.push({
          id: favorito.termo.id.toString(),
          foco: foco.nome_eixo,
          julgamentos: julgamento ? [julgamento.nome_eixo] : [],
        });
      }
    });

    return termosFavoritos;
  };

  const termosFavoritos = agruparTermosFavoritos();

  const isFavorito = (termoId: number) => {
    return favoritos.some((favorito) => favorito.termo_id === termoId);
  };

  const toggleFavorito = async (termoId: number) => {
    try {
      // Implemente a lógica para adicionar ou remover dos favoritos no backend
      // Pode ser necessário enviar uma requisição POST ou DELETE para a rota de favoritos
      console.log(`Toggle favorito para o termo ${termoId}`);
    } catch (error) {
      console.error('Erro ao adicionar/remover dos favoritos:', error);
    }
  };

  return (
    <Container>
      <TituloContainer>
        <Titulo>Termos Favoritos</Titulo>
      </TituloContainer>
      <TermoContainer>
        <FlatList
          data={termosFavoritos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Termo>
              <Foco>
                <Texto>{item.foco}</Texto>
              </Foco>
              <JulgamentoContainer>
                {item.julgamentos.map((julgamento, index) => (
                  <Julgamento key={index}>
                    <Texto>{julgamento}</Texto>
                  </Julgamento>
                ))}
              </JulgamentoContainer>
              <FavoritoContainer>
                <BtnFavorito onPress={() => toggleFavorito(Number(item.id))}>
                  <MaterialIcons
                    name={isFavorito(Number(item.id)) ? 'favorite' : 'favorite-border'}
                    size={30}
                    color={isFavorito(Number(item.id)) ? '#BD4F4F' : '#37A69C'}
                  />
                </BtnFavorito>
              </FavoritoContainer>
            </Termo>
          )}
        />
      </TermoContainer>
    </Container>
  );
}
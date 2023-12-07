// import React, { useState, useEffect } from 'react';
// import { TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
// // estilos
// import { Container, Titulo, TituloContainer, TermoContainer, Termo, Texto, Foco, JulgamentoContainer, Julgamento, BtnFavorito, FavoritoContainer } from './style';
// // icones
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // Componentes
// import { BotaoPesquisa } from '../../BotaoPesquisa';

// //API
// import Api from '../../../services/api';

// // const termos = [
// //     {
// //       id: '001',
// //       foco: 'Abuso de',
// //       julgamento: 'Álcool (ou Alcoolismo)',
// //     },
// //     {
// //       id: '002',
// //       foco: 'Abuso de',
// //       julgamento: 'Drogas',
// //     },
// //     {
// //       id: '003',
// //       foco: 'Abuso de',
// //       julgamento: 'Tabaco (ou de Fumo)',
// //     },
// //     {
// //         id: '004',
// //         foco: 'Aceitação de saúde,',
// //         julgamento: 'Positiva',
// //     },
// //     {
// //         id: '005',
// //         foco: 'Aceitação de saúde,',
// //         julgamento: 'Prejudicada',
// //     },
// //     {
// //         id: '006',
// //         foco: 'Adaptação',
// //         julgamento: 'prejudicada',
// //     },
// //   ];
  
// interface Categoria {
//     id: number;
//     sigla: string;
//     descricao: string;
//     created_at: string | null;
//     updated_at: string | null;
// }
// interface Foco {
//     id: number;
//     tipo_id: number;
//     nome_eixo: string;
//     created_at: string;
//     updated_at: string;
// }
// interface Julgamento {
//     id: number;
//     tipo_id: number;
//     nome_eixo: string;
//     created_at: string;
//     updated_at: string;
// }
// interface Acao {
//     id: number;
//     tipo_id: number;
//     nome_eixo: string;
//     created_at: string;
//     updated_at: string;
//   }
  
//   interface TermoAPI {
//     id: number;
//     categoria_id: number;
//     foco_id: number;
//     julgamento_id: number | null;
//     acao_id: number | null;
//     created_at: string;
//     updated_at: string;
//     categoria: Categoria;
//     foco: Foco;
//     julgamento: Julgamento | null;
//     acao: Acao | null;
//   }
  
//   interface TermoData {
//     id: string;
//     foco: string;
//     julgamentos: string[];
//   }
  
//   export interface TermosProps {}
  
//   export function Termos(props: TermosProps) {
//     const [termos, setTermos] = useState<TermoAPI[]>([]);
  
//     useEffect(() => {
//       async function buscarTermos() {
//         try {
//           const response = await Api.get<TermoAPI[]>('/termos');
//           const termosComJulgamento = response.data.filter(termo => termo.julgamento !== null);
//           setTermos(termosComJulgamento);
//         } catch (error) {
//           console.error('Erro ao buscar termos:', error);
//         }
//       }
//       buscarTermos();
//     }, []);
  
//     const agruparTermos = (dados: TermoAPI[]): TermoData[] => {
//       const termosAgrupados: { [key: string]: TermoData } = {};
  
//       dados.forEach((termo) => {
//         const { foco, julgamento } = termo;
  
//         if (!termosAgrupados[foco.nome_eixo]) {
//           termosAgrupados[foco.nome_eixo] = {
//             id: termo.id.toString(),
//             foco: foco.nome_eixo,
//             julgamentos: julgamento ? [julgamento.nome_eixo] : [],
//           };
//         } else {
//           termosAgrupados[foco.nome_eixo].julgamentos.push(julgamento ? julgamento.nome_eixo : '');
//         }
//       });
  
//       return Object.values(termosAgrupados);
//     };
//     const termosAgrupados = agruparTermos(termos);

//     const [corIcone, setCorIcone] = useState('#37A69C');
//     const [nomeIcone, setNomeIcone] = useState('favorite-border');
//     const alterarIcone = () => {
//         const novaCor = corIcone === '#37A69C' ? '#BD4F4F' : '#37A69C';
//         const novoNome = nomeIcone === 'favorite-border' ? 'favorite' : 'favorite-border';
//         setCorIcone(novaCor);
//         setNomeIcone(novoNome);
//     }
  
//     return (
//       <Container>
//         <TituloContainer>
//           <Titulo>Termos</Titulo>
//         </TituloContainer>
//         <TermoContainer>
//           <FlatList
//             data={termosAgrupados}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <Termo>
//                 <Foco>
//                   <Texto>{item.foco}</Texto>
//                 </Foco>
//                 <JulgamentoContainer>
//                   {item.julgamentos.map((julgamento, index) => (
//                     <Julgamento key={index}>
//                       <Texto>{julgamento}</Texto>
//                     </Julgamento>
//                   ))}
//                 </JulgamentoContainer>
//                 <FavoritoContainer>
//                   <BtnFavorito onPress={alterarIcone}>
//                     <MaterialIcons name={nomeIcone} size={30} color={corIcone} />
//                   </BtnFavorito>
//                 </FavoritoContainer>
//               </Termo>
//             )}
//           />
//         </TermoContainer>
//       </Container>
//     );
//   }
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native';
// estilos
import { Container, Titulo, TituloContainer, TermoContainer, Termo, Texto, Foco, JulgamentoContainer, Julgamento, BtnFavorito, FavoritoContainer } from './style';
// icones
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Componentes
import { BotaoPesquisa } from '../../BotaoPesquisa';

//API
import Api from '../../../services/api';

// const termos = [
//     {
//       id: '001',
//       foco: 'Abuso de',
//       julgamento: 'Álcool (ou Alcoolismo)',
//     },
//     {
//       id: '002',
//       foco: 'Abuso de',
//       julgamento: 'Drogas',
//     },
//     {
//       id: '003',
//       foco: 'Abuso de',
//       julgamento: 'Tabaco (ou de Fumo)',
//     },
//     {
//         id: '004',
//         foco: 'Aceitação de saúde,',
//         julgamento: 'Positiva',
//     },
//     {
//         id: '005',
//         foco: 'Aceitação de saúde,',
//         julgamento: 'Prejudicada',
//     },
//     {
//         id: '006',
//         foco: 'Adaptação',
//         julgamento: 'prejudicada',
//     },
//   ];
  
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
  
  interface TermoData {
    id: string;
    foco: string;
    julgamentos: string[];
  }
  
  export interface TermosProps {}
  
  export function Termos(props: TermosProps) {
    const [termos, setTermos] = useState<TermoAPI[]>([]);
  
    useEffect(() => {
      async function buscarTermos() {
        try {
          const response = await Api.get<TermoAPI[]>('/termos');
          const termosCategoria = response.data.filter(termo => termo.categoria_id === 1);
          setTermos(termosCategoria);
        } catch (error) {
          console.error('Erro ao buscar termos:', error);
        }
      }
      buscarTermos();
    }, []);
  
    const agruparTermos = (dados: TermoAPI[]): TermoData[] => {
      const termosAgrupados: { [key: string]: TermoData } = {};
  
      dados.forEach((termo) => {
        const { foco, julgamento } = termo;
  
        if (!termosAgrupados[foco.nome_eixo]) {
          termosAgrupados[foco.nome_eixo] = {
            id: termo.id.toString(),
            foco: foco.nome_eixo,
            julgamentos: julgamento ? [julgamento.nome_eixo] : [],
          };
        } else {
          termosAgrupados[foco.nome_eixo].julgamentos.push(julgamento ? julgamento.nome_eixo : '');
        }
      });
  
      return Object.values(termosAgrupados);
    };
    const termosAgrupados = agruparTermos(termos);

    const [corIcone, setCorIcone] = useState('#37A69C');
    const [nomeIcone, setNomeIcone] = useState('favorite-border');
    const alterarIcone = () => {
        const novaCor = corIcone === '#37A69C' ? '#BD4F4F' : '#37A69C';
        const novoNome = nomeIcone === 'favorite-border' ? 'favorite' : 'favorite-border';
        setCorIcone(novaCor);
        setNomeIcone(novoNome);
    }
  
    return (
      <Container>
        <TituloContainer>
          <Titulo>Termos</Titulo>
        </TituloContainer>
        <TermoContainer>
          <FlatList
            data={termosAgrupados}
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
                  <BtnFavorito onPress={alterarIcone}>
                    <MaterialIcons name={nomeIcone} size={30} color={corIcone} />
                  </BtnFavorito>
                </FavoritoContainer>
              </Termo>
            )}
          />
        </TermoContainer>
      </Container>
    );
  }
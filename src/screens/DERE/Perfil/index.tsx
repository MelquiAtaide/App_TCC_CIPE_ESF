import { Container, MainContainer } from '../../../styles/mainStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BtnContainer, BtnEditar, BtnInicio, BtnSair, FormContainerEditar, HeaderPerfil, InputEditar, LabelEditar, BtnTexto, TituloInicio } from './style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoInicioParams } from '../../../navigations/NavegacaoInicio';

export interface PerfilScreenProps {
}

export function PerfilScreen (props: PerfilScreenProps) {
    // type navProp = StackNavigationProp<NavegacaoInicioParams>;
    // const navigation = useNavigation<navProp>();
    const navegacao = useNavigation<any>();

    const navegarInicio = () => {
        navegacao.reset({
            index:0,
            routes: [{name: 'Inicio'}],
        });
    };
    return(
        <Container>
            <HeaderPerfil>
                <BtnInicio onPress={navegarInicio}><TituloInicio>Inicio</TituloInicio></BtnInicio>
            </HeaderPerfil>
            <MainContainer>
                <FormContainerEditar>
                    <LabelEditar>Nome Completo</LabelEditar>
                    <InputEditar/>
                    <LabelEditar>E-mail</LabelEditar>
                    <InputEditar/>
                    <BtnContainer>
                        <BtnEditar>
                            <BtnTexto>Editar</BtnTexto>
                        </BtnEditar>
                        <BtnSair>
                            <BtnTexto>Sair</BtnTexto>
                            <MaterialIcons name='exit-to-app' size={25} color="#ffffff"/>
                        </BtnSair>
                    </BtnContainer>
                </FormContainerEditar>
            </MainContainer>
        </Container>
    )
}
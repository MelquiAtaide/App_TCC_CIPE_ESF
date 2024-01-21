import { Container, MainContainer } from '../../../styles/mainStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderHomeTermos } from '../../../components/layouts/headerHomeTermos';
import { Termos } from '../../../components/layouts/termos';

export interface ListaTermosScreenProps {
}

export function ListaTermosScreen (props: ListaTermosScreenProps) {

    const categoria = 1;

    return(
        <Container>
            <HeaderHomeTermos titulo='DE/RE' categoria={categoria}/>
            <MainContainer>
                <Termos categoria={categoria}/>
            </MainContainer>
        </Container>
    )
}
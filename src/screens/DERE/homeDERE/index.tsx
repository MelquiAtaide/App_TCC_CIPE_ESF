import { Container, MainContainer } from '../../../styles/mainStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderHomeTermos } from '../../../components/layouts/headerHomeTermos';
import { Termos } from '../../../components/layouts/termos';

export interface ListaTermosScreenProps {
}

export function ListaTermosScreen (props: ListaTermosScreenProps) {
    return(
        <Container>
            <HeaderHomeTermos titulo='DE/RE'/>
            <MainContainer>
                <Termos categoria={1}/>
            </MainContainer>
        </Container>
    )
}
import { Container, MainContainer } from '../../../styles/mainStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderHomeTermos } from '../../../components/layouts/headerHomeTermos';
import { Termos } from '../../../components/layouts/termos';

export interface ListaTermosIEScreenProps {
}

export function ListaTermosIEScreen (props: ListaTermosIEScreenProps) {
    return(
        <Container>
            <HeaderHomeTermos titulo='IE'/>
            <MainContainer>
                <Termos categoria={2}/>
            </MainContainer>
        </Container>
    )
}
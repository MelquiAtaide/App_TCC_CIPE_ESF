import { Container } from '../../../styles/mainStyles';
import { MainContainer } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderHomeTermos } from '../../../components/layouts/headerHomeTermos';
import { Termos } from '../../../components/layouts/termos';

export interface HomeDEREScreenProps {
}

export function HomeDEREScreen (props: HomeDEREScreenProps) {
    return(
        <Container>
            <HeaderHomeTermos titulo='DE/RE'/>
            <MainContainer>
                <Termos/>
            </MainContainer>
        </Container>
    )
}
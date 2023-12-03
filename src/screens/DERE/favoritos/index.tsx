import { Container, MainContainer } from '../../../styles/mainStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderHomeTermos } from '../../../components/layouts/headerHomeTermos';
import { Termos } from '../../../components/layouts/termos';

export interface FavoritoScreenProps {
}

export function FavoritoScreen (props: FavoritoScreenProps) {
    return(
        <Container>
            <HeaderHomeTermos titulo='FAVORITOS'/>
            <MainContainer>
                <Termos/>
            </MainContainer>
        </Container>
    )
}
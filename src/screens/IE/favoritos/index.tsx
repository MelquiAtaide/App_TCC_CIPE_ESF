import { Container, MainContainer } from '../../../styles/mainStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderHomeTermos } from '../../../components/layouts/headerHomeTermos';
import { Termos } from '../../../components/layouts/termos';
import { TermosFavoritos } from '../../../components/layouts/termosFavoritos';

export interface FavoritoIEScreenProps {
}

export function FavoritoIEScreen (props: FavoritoIEScreenProps) {
    return(
        <Container>
            <HeaderHomeTermos titulo='FAVORITOS'/>
            <MainContainer>
                <TermosFavoritos categoria={2}/>
            </MainContainer>
        </Container>
    )
}
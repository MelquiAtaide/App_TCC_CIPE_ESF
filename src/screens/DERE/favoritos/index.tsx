import { Container, MainContainer } from '../../../styles/mainStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderHomeTermos } from '../../../components/layouts/headerHomeTermos';
import { Termos } from '../../../components/layouts/termos';
import { TermosFavoritos } from '../../../components/layouts/termosFavoritos';

export interface FavoritoScreenProps {
}

export function FavoritoScreen (props: FavoritoScreenProps) {

    const categoria = 1;

    return(
        <Container>
            <HeaderHomeTermos titulo='FAVORITOS' categoria={categoria}/>
            <MainContainer>
                <TermosFavoritos categoria={categoria}/>
            </MainContainer>
        </Container>
    )
}
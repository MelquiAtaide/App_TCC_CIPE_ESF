import React, { useState } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
// estilos
import { Container } from '../../../styles/mainStyles';
import { HeaderContainer, Titulo, TituloConteiner } from './style';
// icones
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Componentes
import { BotaoPesquisa } from '../../BotaoPesquisa'

import { useNavigation } from '@react-navigation/native';;

export interface HeaderHomeTermosProps {
    titulo: string;
}

export function HeaderHomeTermos (props: HeaderHomeTermosProps) {
    const navegacao = useNavigation<any>();
    return(
        <HeaderContainer>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <TituloConteiner>
                <Titulo>{props.titulo}</Titulo>
                <TouchableOpacity onPress={() => navegacao.navigate("InfoDERE")}>
                    <MaterialCommunityIcons name="information-outline" size={30} color="#ffffff"/>
                </TouchableOpacity>
            </TituloConteiner>
            <BotaoPesquisa/>
        </HeaderContainer>
    )
}
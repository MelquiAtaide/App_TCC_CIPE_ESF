import React, { useState } from 'react';
import { Container, FormContainer, Header, Input, Label, SubTitulo, Titulo } from '../../styles/mainStyles';
import { Text, TouchableOpacity, View, StatusBar, Image } from 'react-native';
import { ImgPerfil, NomeUsuario, HeaderHome, MainContainer, BotoesMain, TituloBotoes, LogoutHome, SubtituloIE, SubtituloDE, IconeInfo } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoInicioParams } from '../../navigations/NavegacaoInicio';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    type navProp = StackNavigationProp<NavegacaoInicioParams, "Home">;
    const navigation = useNavigation<navProp>();
    return(
        <Container>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <HeaderHome>
                <IconeInfo>
                    <MaterialCommunityIcons name="information-outline" size={30} color="#73CAC2"/>
                </IconeInfo>
                <ImgPerfil source={require('../../assets/img/logo.png')} />
                <NomeUsuario>Nome Completo <MaterialIcons name="edit" size={18} color="#575757" /></NomeUsuario>
            </HeaderHome>
            <MainContainer>
                <BotoesMain>
                    <TituloBotoes onPress={() => navigation.navigate("HomeDERE")}>- DE|RE -</TituloBotoes>
                    <SubtituloDE>Diagnósticos e Resultados de Enfermagem</SubtituloDE>
                </BotoesMain>
                <BotoesMain>
                    <TituloBotoes>- IE -</TituloBotoes>
                    <SubtituloIE>Intervenções de Enfermagem</SubtituloIE>
                </BotoesMain>
            </MainContainer>
            <LogoutHome>
                <Text style={{fontSize: 16}}>Sair da Conta</Text>
            </LogoutHome>
        </Container>
    )
}
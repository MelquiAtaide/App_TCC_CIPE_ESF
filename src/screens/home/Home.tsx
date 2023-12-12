import React, { useState } from 'react';
import { Container, FormContainer, Header, Input, Label, SubTitulo, Titulo } from '../../styles/mainStyles';
import { Text, TouchableOpacity, View, StatusBar, Image } from 'react-native';
import { ImgPerfil, NomeUsuario, HeaderHome, MainContainer, BotoesMain, TituloBotoes, LogoutHome, SubtituloIE, SubtituloDE, IconeInfo } from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoInicioParams } from '../../navigations/NavegacaoInicio';
import { useAuth } from '../../contexts/AuthContext';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    type navProp = StackNavigationProp<NavegacaoInicioParams, "Inicio">;
    const navigation = useNavigation<navProp>();
    const { userData } = useAuth();
    return(
        <Container>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <HeaderHome>
                <IconeInfo onPress={() => navigation.navigate("InfoHome")}>
                    <MaterialCommunityIcons name="information-outline" size={30} color="#73CAC2"/>
                </IconeInfo>
                <ImgPerfil source={require('../../assets/img/logo.png')} />
                <NomeUsuario>{userData?.nome} 
                {/* <MaterialIcons name="edit" size={18} color="#575757" /> */}
                </NomeUsuario>
            </HeaderHome>
            <MainContainer>
                <BotoesMain onPress={() => navigation.navigate("ListaTermos")}>
                    <TituloBotoes>- DE|RE -</TituloBotoes>
                    <SubtituloDE>Diagnósticos e Resultados de Enfermagem</SubtituloDE>
                </BotoesMain>
                <BotoesMain onPress={() => navigation.navigate("ListaTermosIE")}>
                    <TituloBotoes>- IE -</TituloBotoes>
                    <SubtituloIE>Intervenções de Enfermagem</SubtituloIE>
                </BotoesMain>
            </MainContainer>
            <LogoutHome onPress={() => navigation.navigate("Login")}>
                <Text style={{fontSize: 16}}>Sair da Conta</Text>
            </LogoutHome>
        </Container>
    )
}
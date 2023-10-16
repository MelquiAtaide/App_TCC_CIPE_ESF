import React, { useState } from 'react';
import { Container, FormContainer, Header, Input, Label, SubTitulo, Titulo } from '../../styles/mainStyles';
import { Text, TouchableOpacity, View, StatusBar } from 'react-native';
// import { BotaoRecuperar, TextoRecuperar } from './style';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    return(
        <Container>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <Header>
                <Titulo>Nome Completo</Titulo>
            </Header>
            <View style={{flex: 4}}>
                <TouchableOpacity style={{backgroundColor: '#37A69C', width: '80%', margin: '10%', flex: 1}}>
                    <Text>- DE|RE -</Text>
                    <Text>Diagnósticos e Resultados de Enfermagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#37A69C', width: '80%', margin: '10%', flex: 1}}>
                    <Text>- IE -</Text>
                    <Text>Intervenções de Enfermagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                    <Text>Sair da Conta</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}
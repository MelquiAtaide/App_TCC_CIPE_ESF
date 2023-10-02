import * as React from 'react';
import { Container, SubTitulo, Titulo } from '../../styles/mainStyles';
import { StatusBar, Text, View } from 'react-native';

export interface LoginscreenProps {
}

export function LoginScreen (props: LoginscreenProps) {
    return(
        <Container>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <View>
                <Titulo>Acesse</Titulo>
                <SubTitulo>Com o e-mail e senha para entrar</SubTitulo>
            </View>
        </Container>
    );
}
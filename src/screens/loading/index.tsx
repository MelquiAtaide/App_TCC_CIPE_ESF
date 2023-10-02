import * as React from 'react';
import { Container, Logo, Titulo } from './styles';

export interface LoadingscreenProps {
}

export function LoadingScreen (props: LoadingscreenProps) {
    return(
        <Container>
            <Logo source={require('../../assets/img/logo.png')} />
            <Titulo>Bem vindo</Titulo>
        </Container>
    );
}
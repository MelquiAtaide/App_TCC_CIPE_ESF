import React, { useState } from 'react';
import { Container, FormContainer, Header, Input, Label, SubTitulo, Titulo } from '../../styles/mainStyles';
import { BotaoRecuperar, TextoRecuperar } from './style';

export interface recuperarSenhaScreenProps {
}

export function RecuperarSenhaScreen (props: recuperarSenhaScreenProps) {
    return(
        <Container>
            <Header>
                <Titulo>Esqueceu sua senha?</Titulo>
                <SubTitulo>Informe seu e-mail para recupera-la!</SubTitulo>
            </Header>
            <FormContainer>
                <Label>Digite seu e-mail</Label>
                <Input placeholder={"E-mail"} />
                <BotaoRecuperar>
                    <TextoRecuperar>Recuperar Senha</TextoRecuperar>
                </BotaoRecuperar>
            </FormContainer>
        </Container>
    )
}
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Header, Titulo, Input, Label, InputSenha, InputSenhaContainer, FormContainer } from '../../styles/mainStyles';
import { BotaoContainer, BotaoCadastrar, TextoCadastrar, AcaoContainer, } from './styles';
import BotaoVerSenha from '../../components/BotaoVerSenha';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoLoginParams } from '../../navigations/NavegacaoLogin';

export interface CadastroScreenProps {
}

export function CadastroScreen (props: CadastroScreenProps) {

    type navProp = StackNavigationProp<NavegacaoLoginParams, "Cadastro">;
    const navigation = useNavigation<navProp>();
    const [esconderSenha, setEsconderSenha] = useState(true);
    const handlePasswordToggle = (visible: boolean) => {
        setEsconderSenha(!visible);
    };

    return(
        <Container>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <Header>
                <Titulo>Cadastre-se</Titulo>
            </Header>
            <FormContainer>
                <Label>Digite seu nome</Label>
                <Input placeholder="Nome Completo" />
                <Label>Digite seu e-mail</Label>
                <Input placeholder="E-mail" />
                <Label>Digite sua senha</Label>
                <InputSenhaContainer>
                    <InputSenha 
                    placeholder="Senha" 
                    secureTextEntry={esconderSenha}
                    />
                    <BotaoVerSenha onToggle={handlePasswordToggle} />
                </InputSenhaContainer>
                <Label>Digite sua senha novamente</Label>
                <InputSenhaContainer>
                    <InputSenha 
                    placeholder="Senha" 
                    secureTextEntry={esconderSenha}
                    />
                    <BotaoVerSenha onToggle={handlePasswordToggle} />
                </InputSenhaContainer>
                <BotaoContainer>
                    <BotaoCadastrar>
                        <TextoCadastrar>Cadastrar</TextoCadastrar>
                    </BotaoCadastrar>
                </BotaoContainer>
            </FormContainer>
            <AcaoContainer onPress={() => navigation.navigate("Login")}>
                <Text>Já possui login? Clique aqui!</Text>
            </AcaoContainer>
        </Container>

    )}
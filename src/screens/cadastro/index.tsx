import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Header, Titulo, Input, Label, InputSenha, InputSenhaContainer, FormContainer } from '../../styles/mainStyles';
import { BotaoContainer, BotaoCadastrar, TextoCadastrar, AcaoContainer, } from './styles';
import BotaoVerSenha from '../../components/BotaoVerSenha';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoInicioParams } from '../../navigations/NavegacaoInicio';
import api from '../../services/api';

export interface CadastroScreenProps {
}

export function CadastroScreen (props: CadastroScreenProps) {

    type navProp = StackNavigationProp<NavegacaoInicioParams, "Cadastro">;
    const navigation = useNavigation<navProp>();
    const [esconderSenha, setEsconderSenha] = useState(true);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const handlePasswordToggle = (visible: boolean) => {
        setEsconderSenha(!visible);
    };
    const handleCadastrar = async () => {
        try {
            if (nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
                Alert.alert('Por favor, preencha todos os campos.');
                return;
              }
            
              if (senha !== senhaConfirmacao) {
                Alert.alert('As senhas não coincidem.');
                return;
              }
            
              if (senha.length < 8) {
                Alert.alert('A senha deve ter pelo menos 8 caracteres.');
                return;
              }
          console.log('Valores do formulário:', { nome, email, senha });
          const response = await api.post('/cadastrar-usuario', {
            nome,
            email,
            senha,
          });
    
          if (response.data.success) {
            console.log('Cadastro realizado com sucesso!');
            navigation.navigate('Login');
          } else {
            console.error('Erro no cadastro:', response.data.message);
          }
        } catch (error) {
          console.error('Erro ao cadastrar:', error);
        }
      };

    return(
        <Container>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <Header>
                <Titulo>Cadastre-se</Titulo>
            </Header>
            <FormContainer>
                <Label>Digite seu nome</Label>
                <Input placeholder="Nome Completo" onChangeText={(text: string) => setNome(text)}/>
                <Label>Digite seu e-mail</Label>
                <Input placeholder="E-mail" onChangeText={(text: string)=>setEmail(text)}/>
                <Label>Digite sua senha</Label>
                <InputSenhaContainer>
                    <InputSenha 
                    placeholder="Senha" 
                    secureTextEntry={esconderSenha}
                    onChangeText={(text: string)=>setSenha(text)}
                    />
                    <BotaoVerSenha onToggle={handlePasswordToggle} />
                </InputSenhaContainer>
                <Label>Digite sua senha novamente</Label>
                <InputSenhaContainer>
                    <InputSenha 
                    placeholder="Senha" 
                    secureTextEntry={esconderSenha}
                    onChangeText={(text: string)=>setSenhaConfirmacao(text)}
                    />
                    <BotaoVerSenha onToggle={handlePasswordToggle} />
                </InputSenhaContainer>
                <BotaoContainer>
                    <BotaoCadastrar onPress={handleCadastrar}>
                        <TextoCadastrar>Cadastrar</TextoCadastrar>
                    </BotaoCadastrar>
                </BotaoContainer>
            </FormContainer>
            <AcaoContainer onPress={() => navigation.navigate("Login")}>
                <Text>Já possui login? Clique aqui!</Text>
            </AcaoContainer>
        </Container>

    )}
import React, { useState } from 'react';
import { Container, Header, SubTitulo, Titulo, Input, Label, InputSenha, InputSenhaContainer, FormContainer } from '../../styles/mainStyles';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AcaoContainer, BotaoContainer, BotaoCadastro, BotaoEntrar, TextoCadastro, TextoEntrar, CheckBoxContainer } from './styles';
import CheckBox from '../../components/CheckBox';
import { Formik } from 'formik';
import BotaoVerSenha from '../../components/BotaoVerSenha';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavegacaoInicioParams } from '../../navigations/NavegacaoInicio';
import axios, { AxiosError } from 'axios';
import api from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
export interface LoginscreenProps {
}

export function LoginScreen (props: LoginscreenProps) {
    // const navigation = useNavigation();
    type navProp = StackNavigationProp<NavegacaoInicioParams, "Login">;
    const navigation = useNavigation<navProp>();

    const [esconderSenha, setEsconderSenha] = useState(true);
    const [resultado, setResultado] = useState('');
    const handlePasswordToggle = (visible: boolean) => {
        setEsconderSenha(!visible);
    };

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroLogin, setErroLogin] = useState('');
    const { setUserData } = useAuth();
    const handleLogin = async ({email, senha}:any) => {
        try {
            console.log('Valores do formulário:', { email, senha });
            const response = await api.post('/logar', {
                email,
                senha,
            });

            console.log(response.data);
            if (!response.data.erro) {
                setUserData(response.data);
                navigation.navigate('Inicio');
            } else {
                setErroLogin('Email ou senha incorreto');
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Erro no login:', error.response?.data);
                setErroLogin('Email ou senha incorreto');
            } else {
                console.error('Erro desconhecido:', error);
            }
        }
    };

    return(
        <Container>
            <StatusBar backgroundColor="#73CAC2" barStyle="light-content"/>
            <Header>
                <Titulo>Acesse</Titulo>
                <SubTitulo>Com o e-mail e senha para entrar</SubTitulo>
            </Header>
            <Formik
                initialValues={{email:'', senha:''}}
                onSubmit={handleLogin}>
                {({values, handleChange, handleSubmit}) => (
                    <FormContainer>
                        <Label>Digite seu e-mail</Label>
                        <Input placeholder="E-mail" value={values.email} onChangeText={(text: string) => handleChange('email')(text)}/>
                        <Label>Digite sua senha</Label>
                        <InputSenhaContainer>
                            <InputSenha 
                            placeholder="Senha" 
                            value={values.senha} onChangeText={(text: string) => handleChange('senha')(text)}
                            secureTextEntry={esconderSenha}
                            />
                            <BotaoVerSenha onToggle={handlePasswordToggle} />
                        </InputSenhaContainer>
                        <AcaoContainer>
                            <CheckBoxContainer>
                                <CheckBox/>
                                <Text style={{paddingLeft: 5}}>Lembrar minha senha</Text>
                            </CheckBoxContainer>
                            <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
                                <Text>Esqueci minha senha</Text>
                            </TouchableOpacity>
                        </AcaoContainer>
                        <BotaoContainer>
                            <BotaoCadastro onPress={() => navigation.navigate("Cadastro")}>
                                <TextoCadastro>Cadastre-se</TextoCadastro>
                            </BotaoCadastro>
                            <BotaoEntrar onPress={() => handleSubmit()}>
                                <TextoEntrar>Entrar</TextoEntrar>
                            </BotaoEntrar>
                        </BotaoContainer>
                        {/* { resultado == 'logado' && <Text>Logado com sucesso</Text>}
                        { resultado == 'falhou' && <Text>Email ou senha incorreto</Text>} */}
                        {erroLogin && <Text>{erroLogin}</Text>}

                    </FormContainer>
                )}

            </Formik>
        </Container>
    );
}
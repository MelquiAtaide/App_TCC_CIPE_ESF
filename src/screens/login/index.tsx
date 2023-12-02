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
    const handleLogin = ({email, senha}: any) => {
        if (email.trim() == 'teste' && senha.trim() == '123') {
            navigation.navigate('Home');
            // setResultado('logado');
        }else{
            setResultado('falhou');
        }
    }

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
                        <Input placeholder="E-mail" value={values.email} onChangeText={handleChange("email")}/>
                        <Label>Digite sua senha</Label>
                        <InputSenhaContainer>
                            <InputSenha 
                            placeholder="Senha" 
                            value={values.senha} onChangeText={handleChange("senha")}
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
                            <BotaoEntrar>
                                <TextoEntrar onPress={() => handleSubmit()}>Entrar</TextoEntrar>
                            </BotaoEntrar>
                        </BotaoContainer>
                        { resultado == 'logado' && <Text>Logado com sucesso</Text>}
                        { resultado == 'falhou' && <Text>Email ou senha incorreto</Text>}

                    </FormContainer>
                )}

            </Formik>
        </Container>
    );
}
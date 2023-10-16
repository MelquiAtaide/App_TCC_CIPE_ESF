import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    background-color: ${props => props.theme.background};
    /* background-color: red; */
    color: ${props => props.theme.color};
    flex:1;
    align-items: flex-start;
    justify-content: flex-end;
    width: 90%;
    padding-bottom: 10px;
`;

export const Titulo = styled.Text`
    color: ${props => props.theme.color};
    font-size: 24px;
    font-weight: 700;
    /* font-family: Istok Web; */
    /* line-height: 35px; */
    /* letter-spacing: 0em; */
    /* text-align: left; */
`;

export const SubTitulo = styled.Text`
    color: ${props => props.theme.color};
    font-size: 14px;
    font-weight: 400;
    /* font-family: Istok Web; */
    /* line-height: 20px; */
    /* letter-spacing: 0em; */
    /* text-align: left; */
`;
export const FormContainer = styled.View`
    flex:4;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10%;
    width: 90%;
`;
export const Label = styled.Text`
    color: ${props => props.theme.color};
    font-size: 13px;
    margin-top: 15px;
`;
export const Input = styled.TextInput`
    background-color: #EDEDED;
    width: 100%;
    height: 60px;
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    color: #7E7E7E;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const InputSenha = styled.TextInput`
    background-color: #EDEDED;
    width: 85%;
    height: 60px;
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    color: #7E7E7E;
    border-radius: 5px;
`;
export const InputSenhaContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: #EDEDED;
    border-radius: 5px;
`;

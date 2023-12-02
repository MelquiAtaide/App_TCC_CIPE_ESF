import styled from 'styled-components/native';

export const HeaderHome = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
`;
export const IconeInfo = styled.TouchableOpacity`
    width: 100%;
    align-items: flex-end;
    padding-right: 30px;
    padding-top: 10px;
`;
export const ImgPerfil = styled.Image`
    flex: 1;
    width: 70%;
    height: 90%;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;
export const NomeUsuario = styled.Text`
    font-size: 16px;
    color: #575757;
    font-weight: bold;
`;
export const MainContainer = styled.View`
    flex: 2;
    margin: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const BotoesMain = styled.TouchableOpacity`
    flex: 1;
    margin: 10px;
    justify-content: center;
    align-items: center;
    background-color: #37A69C;
    padding: 5px;
    padding-top: 1px;
    width: 223px;
    border-radius: 13px;
`;
export const TituloBotoes = styled.Text`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 3px;
    color: #ffffff;
`;
export const SubtituloDE= styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
export const SubtituloIE = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
export const LogoutHome = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 20px;
`;

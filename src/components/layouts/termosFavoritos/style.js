import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #D9D9D9;
    border-radius: 8px;
`;
export const TituloContainer = styled.View`
    /* flex: 1; */
    padding: 2px;
    padding-left: 10px;
    background-color: #37A69C;
    border-radius: 4px;
    border: 1px solid #73CAC2;
    margin: 15px;
`;
export const Titulo = styled.Text`
    color: #000000;
    font-size: 20px;
    font-weight: 800;
`;
export const TermoContainer = styled.View`
    flex: 1;
    /* background-color: yellow; */
    margin: 15px;
    margin-top: 0px;

`;
export const Termo = styled.View`
    background-color: #FFFFFF;
    /* flex: 1; */
    width: 400px;
    height: 70px;
    border-radius: 6px;
    margin-bottom: 10px;
    margin-top: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Texto = styled.Text`
    color: #000000;
    font-size: 10px;
    font-weight: 500;
`;
export const Foco = styled.View`
    flex: 2;
    height: 80%;
    background-color: #DEDEDE;
    border-radius: 6px;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;
export const JulgamentoContainer = styled.View`
    flex: 2;
    background-color: azul;
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const Julgamento = styled.View`
    background-color: #DEDEDE;
    border-radius: 6px;
    margin-top: 1px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    align-items: start;
    justify-content: center;
`;
export const FavoritoContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const BtnFavorito = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    background-color: #DEDEDE;
    border-radius: 6px;
    border: 1px solid #73CAC2;
    margin: 10px;
    align-items: center;
    justify-content: center;
`;

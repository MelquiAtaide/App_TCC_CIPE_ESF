import styled from 'styled-components/native';

export const HeaderPerfil = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #73CAC2;
    border-bottom-width: 6px;
    border-bottom-color: #37A69C;
`;
export const BtnInicio = styled.TouchableOpacity`
    width: 40%;
    height: 60px;
    border-radius: 8px;
    background-color: #37A69C;
    justify-content: center;
    align-items: center;
`;
export const TituloInicio = styled.Text`
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
`;

export const FormContainerEditar = styled.View`
    flex:4;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10%;
    width: 90%;
`;
export const LabelEditar = styled.Text`
    color: ${props => props.theme.color};
    font-size: 13px;
    margin-top: 15px;
`;
export const InputEditar = styled.TextInput`
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
    color: ${props => props.theme.color};
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom-width: 2px;
    border-bottom-color: #37A69C;
`;
export const BtnContainer = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const BtnEditar = styled.TouchableOpacity`
    /* flex: 1; */
    width: 70px;
    height: 51px;
    align-items: center;
    justify-content: center;
    background-color: #73CAC2;
    border-radius: 5px;
`;
export const BtnTexto = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    padding: 5px;
    `;
export const BtnSair = styled.TouchableOpacity`
    /* flex: 1; */
    width: 80px;
    height: 51px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: #BD4F4F;
    border-radius: 5px;
`;
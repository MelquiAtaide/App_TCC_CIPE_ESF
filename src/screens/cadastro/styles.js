import styled from 'styled-components/native';

export const BotaoContainer = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const BotaoCadastrar = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #73CAC2;
    border-radius: 5px;
    width: 100%;
    height: 51px;
`;
export const TextoCadastrar = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;
export const AcaoContainer = styled.TouchableOpacity`
    flex: 1;
    margin-top: 70px;
    width: 100%;
    font-size: 11px;
    align-items: center;
    justify-content: flex-start;
`;
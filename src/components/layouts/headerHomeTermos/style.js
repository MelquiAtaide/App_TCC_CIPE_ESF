import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex: 1;
    background-color: #73CAC2;
    /* react native não suporta o border-bottom */
    border-bottom-width: 6px;
    border-bottom-color: #37A69C;
`;
export const TituloConteiner = styled.View`
    flex: 1;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 2px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const Titulo = styled.Text`
    color: #ffffff;
    font-size: 24px;
    font-weight: 800;
    justify-content: center;
`;

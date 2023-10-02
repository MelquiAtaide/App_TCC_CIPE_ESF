import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    align-items: center;
    justify-content: center;
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
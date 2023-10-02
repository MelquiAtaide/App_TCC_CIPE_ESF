import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    align-items: center;
    justify-content: center;
`;

export const Titulo = styled.Text`
    color: #000000;
    padding: 15px;
    /* font-family: Istok Web; */
    font-size: 24px;
    font-weight: 700;
    /* line-height: 35px; */
    /* text-align: left; */

`;

export const Logo = styled.Image`
    width: 60%;
`;
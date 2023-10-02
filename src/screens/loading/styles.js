import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    align-items: center;
    justify-content: center;
`;

export const Titulo = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.color};
    padding: 15px;
`;

export const Logo = styled.Image`
    width: 60%;
`;
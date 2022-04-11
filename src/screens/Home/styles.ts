import styled from 'styled-components/native';
import colors from '~/config/colors';

export const Container = styled.View`
    flex: 1;
    align-content: center;
    background-color: ${colors.primary};
`;

export const Title = styled.Text`
    font-size: 36px;
    font-weight: 700;
    text-align: left;
    color: ${colors.second};
`;

export const TitleContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 15%;
`;

export const Form = styled.View`
    margin: 16px 16px 0 16px;
`;

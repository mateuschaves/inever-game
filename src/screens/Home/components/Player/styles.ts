import styled from 'styled-components/native';
import colors from '~/config/colors';

export const Container = styled.View`
    background-color: ${colors.third};
    border-radius: 8px;
    margin: 8px 0 8px 0;
    height: 56px;
    color: ${colors.white};
    font-size: 16px;
    font-weight: 800;
    padding: 16px;
`;

export const PlayerName = styled.Text`
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    color: ${colors.white};
`;

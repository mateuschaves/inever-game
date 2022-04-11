import styled from 'styled-components/native';
import colors from '~/config/colors';

export const Container = styled.Pressable`
  background-color: ${colors.button};
  border-radius: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin: 8px 0 8px 0;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: ${colors.white};
`;

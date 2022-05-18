import {
  TextProps, Animated, ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

const defaultContainerBackgroundColor = '#fff';
const defaultTextColor = '#000';

interface ContainerProps {
    backgroundColor?: string;
    style: Animated.AnimatedProps<ViewStyle>,

}

interface MessageProps extends TextProps {
    textColor?: string;
}

export const Container = styled(Animated.View)<ContainerProps>`
  position: absolute;
  left: 5%;
  top: 0;
  height: 48px;
  border-radius: 8px;
  /* margin: 95% 16px 0 16px; */
  background-color: ${({ backgroundColor }) => (backgroundColor || defaultContainerBackgroundColor)};
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Message = styled.Text<MessageProps>`
  color: ${({ textColor }) => (textColor || defaultTextColor)};
  font-size: 16px;
  font-weight: 600;
`;

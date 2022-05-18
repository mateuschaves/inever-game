import React, {
  forwardRef, useImperativeHandle, useState,
} from 'react';
import { ViewStyle, Animated, Dimensions } from 'react-native';

import { Container, Message } from './styles';

const { height } = Dimensions.get('window');

const heightToHideAlert = height + 200;
const heightToShowAlert = height - 96;

interface AlertProps {
    // eslint-disable-next-line react/require-default-props
    style?: Animated.AnimatedProps<ViewStyle>,
    backgroundColor: string;
    textColor: string;
}

const Alert = forwardRef((props: AlertProps, ref) => {
  const {
    backgroundColor, textColor, style,
  } = props;

  const [message, setMessage] = useState('');
  const alertAnimation = new Animated.ValueXY({
    x: 0,
    y: heightToHideAlert,
  });

  function hideAlert() {
    Animated.timing(
      alertAnimation,
      {
        toValue: {
          x: 0,
          y: heightToHideAlert,
        },
        useNativeDriver: true,
      },
    ).start();
  }

  function hideAlertAfter(ms: number) {
    setTimeout(() => {
      hideAlert();
    }, ms);
  }

  useImperativeHandle(ref, () => ({
    showAlert(localMessage: string) {
      setMessage(localMessage);
      Animated.spring(
        alertAnimation,
        {
          toValue: {
            x: 0,
            y: heightToShowAlert,
          },
          useNativeDriver: true,
        },
      ).start(() => hideAlertAfter(3000));
    },
    hideAlert,
    hideAlertAfter,
  }));

  return (
    <Container
      onTouchEnd={() => hideAlert()}
      backgroundColor={backgroundColor}
      style={{
        transform: [{ translateX: alertAnimation.x }, { translateY: alertAnimation.y }],
        ...style,
      }}
    >
      <Message textColor={textColor}>{message}</Message>
    </Container>
  );
});

export default Alert;

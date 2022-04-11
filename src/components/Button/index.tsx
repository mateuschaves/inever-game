/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PressableProps, ActivityIndicator } from 'react-native';
import colors from '~/config/colors';

import { Container, Title } from './styles';

interface ButtonProps extends PressableProps {
  title: string;
  // eslint-disable-next-line react/require-default-props
  loading?: boolean;
}

export default function Button({ title, loading = false, ...props }: ButtonProps) {
  function renderButtonContent() {
    if (loading) {
      return (
        <ActivityIndicator
          color={colors.white}
        />
      );
    }

    return (
      <Title>
        {title}
      </Title>
    );
  }

  return (
    <Container {...props}>
      {renderButtonContent()}
    </Container>
  );
}

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextInputProps } from 'react-native';

import { TextInput } from './styles';

interface TextFieldProps extends TextInputProps {}

export default function TextField(props: TextFieldProps) {
  return (
    <TextInput {...props} />
  );
}

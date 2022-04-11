import React from 'react';
import Button from '~/components/Button';
import TextField from '~/components/TextField';
import {
  Container, Title, TitleContainer, Form,
} from './styles';

export default function Home() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          Quem vai beber ?
        </Title>
      </TitleContainer>

      <Form>
        <TextField
          keyboardType="name-phone-pad"
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextField
          keyboardType="name-phone-pad"
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Button
          title="Adicionar"
        />
      </Form>

    </Container>
  );
}

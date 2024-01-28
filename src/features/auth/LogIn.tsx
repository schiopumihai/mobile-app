import React from 'react';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import styled from 'styled-components/native';
import { Logo } from '@/components/Log';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(7)}px;
  gap: ${({ theme }) => theme.spacing(10.5)}px;
`;

const FormContainer = styled.View`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing(3.5)}px;
`;

export const LogIn: React.FC = () => {
  return (
    <Container>
      <Logo />
      <FormContainer>
        <TextInput placeholder="Phone number, email or username" />
        <TextInput placeholder="Password" secureTextEntry />
        <Button
          onPress={() => {
            console.log('Pressed');
          }}
          fullWidth
        >
          Sign In
        </Button>
      </FormContainer>
      <Divider>OR</Divider>
      <Button fullWidth>Sign Up with Facebook</Button>
    </Container>
  );
};

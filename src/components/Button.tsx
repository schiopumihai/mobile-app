import React from 'react';
import styled from 'styled-components/native';
import { type PressableProps } from 'react-native';
import { Text } from './Text';

export interface StyledPressableProps extends PressableProps {
  fullWidth?: boolean;
}

const Pressable = styled.Pressable<StyledPressableProps>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.primary};
  border-radius: ${({ theme }) => theme.borders.radius}px;
  padding: ${({ theme }) => theme.spacing(3.5)}px
    ${({ theme }) => theme.spacing(3)}px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Button: React.FC<StyledPressableProps> = ({
  children,
  ...props
}) => {
  return (
    <Pressable {...props}>
      <Label>{children as any}</Label>
    </Pressable>
  );
};

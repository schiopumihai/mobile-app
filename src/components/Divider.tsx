import React from 'react';
import { type ViewProps } from 'react-native';
import { Text } from './Text';
import styled from 'styled-components/native';

const Container = styled.View`
  border-bottom-width: ${({ theme }) => theme.borders.width}px;
  border-color: ${({ theme }) => theme.colors.border};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.border};
  padding: 0 ${({ theme }) => theme.spacing(4.5)}px;
  position: absolute;
  top: -8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Divider: React.FC<ViewProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Label>{children}</Label>
    </Container>
  );
};

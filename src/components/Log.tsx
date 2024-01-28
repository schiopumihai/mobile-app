import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Pacifico};
  font-size: 32px;
`;

export const Logo: React.FC = () => {
  return <Text>Mobile App</Text>;
};

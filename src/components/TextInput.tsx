import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borders.radius}px;
  font-family: ${({ theme }) => theme.fonts.Inter};
  border: ${({ theme }) => theme.borders.width}px solid
    ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.Inter};
  padding: ${({ theme }) => theme.spacing(3.5)}px
    ${({ theme }) => theme.spacing(3)}px;
  placeholderTextColor: ${({ theme }) => theme.colors.placeholder};
`;

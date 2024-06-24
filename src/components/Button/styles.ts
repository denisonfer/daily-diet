import { Plus } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colorsBase.gray200};
    border-radius: 6px;
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.colorsBase.white,
}))`
  margin-right: 12px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.white};
  `}
`;

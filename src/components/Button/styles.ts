import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type TButtonProps = {
  outlined?: boolean;
};

export const Container = styled(TouchableOpacity)<TButtonProps>`
  ${({ theme, outlined }) => css`
    height: 50px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colorsBase.gray200};
    border-radius: 6px;

    ${outlined &&
    css`
      background-color: ${theme.colorsBase.white};
      border: 1px solid ${theme.colorsBase.gray200};
    `}
  `}
`;

export const Text = styled.Text<TButtonProps>`
  ${({ theme, outlined }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.white};
    margin-left: 12px;

    ${outlined &&
    css`
      color: ${theme.colorsBase.gray200};
    `}
  `}
`;

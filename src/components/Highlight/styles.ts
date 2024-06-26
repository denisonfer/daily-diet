import styled, { css } from 'styled-components/native';
type TTextProps = {
  fontSize?: number;
};

export const Title = styled.Text<TTextProps>`
  ${({ theme, fontSize }) => css`
    font-size: ${fontSize ?? theme.fontSizes.xxl}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colorsBase.gray200};
    text-align: center;
  `}
`;

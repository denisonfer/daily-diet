import styled, { css } from 'styled-components/native';

type TWithinDietProps = {
  isWithinDiet: boolean;
};

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    border: 1px solid ${theme.colorsBase.gray500};
    border-radius: 6px;
    padding: 16px 12px;
  `}
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
    margin-right: 12px;
  `}
`;
export const Food = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colorsBase.gray200};
  `}
`;

export const VerticalDivider = styled.View`
  ${({ theme }) => css`
    width: 1px;
    height: 24px;
    background-color: ${theme.colorsBase.gray400};
    margin-right: 12px;
  `}
`;

export const WithinDiet = styled.View<TWithinDietProps>`
  ${({ theme, isWithinDiet }) => css`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${isWithinDiet
      ? theme.colorsProduct.greenMid
      : theme.colorsProduct.redMid};
  `}
`;

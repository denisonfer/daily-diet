import Button from '@components/Button';
import styled, { css } from 'styled-components/native';

type TPointProps = {
  withinDiet: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
    margin-bottom: 8px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colorsBase.gray200};
    margin-bottom: 24px;
  `}
`;
export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
    margin-bottom: 8px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colorsBase.gray200};
    margin-bottom: 24px;
  `}
`;

export const Tag = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 160px;
    background-color: ${theme.colorsBase.gray600};
    padding: 8px 16px;
    border-radius: 999px;
  `}
`;

export const Point = styled.View<TPointProps>`
  ${({ theme, withinDiet }) => css`
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background-color: ${withinDiet
      ? theme.colorsProduct.greenDark
      : theme.colorsProduct.redDark};
    margin-right: 8px;
  `}
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
  `}
`;

export const Footer = styled.View`
  margin-top: auto;
  margin-bottom: 40px;
`;

export const ButtonEdit = styled(Button)`
  margin-bottom: 8px;
`;

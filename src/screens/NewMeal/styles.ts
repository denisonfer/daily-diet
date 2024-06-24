import styled, { css } from 'styled-components/native';

type TPointProps = {
  isRed?: boolean;
};
type TButtonProps = {
  withinDiet: undefined | boolean;
};

type TInputProps = {
  isDescription?: boolean;
};

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'padding',
})`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})`
  flex: 1;
  margin-bottom: 20px;
`;

export const Form = styled.View`
  ${({ theme }) => css`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -20px;
    padding: 40px 24px;
    background-color: ${theme.colorsBase.gray700};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray200};
    margin-bottom: 4px;
  `}
`;

export const Column = styled.View`
  width: 45%;
`;

export const Input = styled.TextInput<TInputProps>`
  ${({ theme, isDescription }) => css`
    width: 100%;
    height: ${isDescription ? 120 : 50}px;
    border: 1px solid ${theme.colorsBase.gray500};
    border-radius: 8px;
    padding: 12px;
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colorsBase.gray100};
    margin-bottom: 24px;
  `}
`;
export const ButtonDate = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border: 1px solid ${theme.colorsBase.gray500};
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 24px;
  `}
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<TButtonProps>`
  ${({ theme, withinDiet }) => css`
    width: 45%;
    height: 50px;
    border-radius: 6px;
    background-color: ${withinDiet === undefined
      ? theme.colorsBase.gray600
      : withinDiet
      ? theme.colorsProduct.greenLight
      : theme.colorsProduct.redLight};
    border: ${withinDiet === undefined
      ? `none`
      : withinDiet
      ? `1px solid ${theme.colorsProduct.greenDark}`
      : `1px solid ${theme.colorsProduct.redDark}`};
    align-items: center;
    justify-content: center;
    flex-direction: row;
  `}
`;

export const Point = styled.View<TPointProps>`
  ${({ theme, isRed }) => css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 8px;
    background-color: ${isRed
      ? theme.colorsProduct.redDark
      : theme.colorsProduct.greenDark};
  `}
`;
export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
  `}
`;

export const Modal = styled.View`
  padding: 24px;
`;

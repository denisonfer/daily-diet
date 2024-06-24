import Logo from '@assets/images/logo.svg';
import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type TLabelProps = {
  isBold?: boolean;
};

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colorsBase.gray700};
    padding: 24px;
  `};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const AppLogo = styled(Logo)`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
`;

export const ContainerInfo = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colorsProduct.greenLight};
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    height: 102px;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 40px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxl}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colorsBase.gray200};
  `}
`;

export const Button = styled(TouchableOpacity)`
  height: 45px;
  width: 45px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const IconArrowUp = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.colorsProduct.greenDark,
}))``;

export const ContainerAddMeal = styled.View`
  margin-bottom: 32px;
`;

export const Label = styled.Text<TLabelProps>`
  ${({ theme, isBold }) => css`
    font-size: ${theme.fontSizes.xl}px;
    font-family: ${isBold ? theme.fonts.bold : theme.fonts.regular};
    color: ${theme.colorsBase.gray100};
    margin-bottom: 8px;
  `}
`;

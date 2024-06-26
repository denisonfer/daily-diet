import getBackgroundColor from '@utils/getBackgroundColor';
import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type TContainerProps = {
  withinDiet?: boolean;
};

export const Container = styled.View<TContainerProps>`
  ${({ withinDiet }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    background-color: ${getBackgroundColor(withinDiet).bcgColor};
    padding-top: 20px;
  `}
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const IconBack = styled(ArrowLeft).attrs<TContainerProps>(
  ({ withinDiet }) => ({
    size: 24,
    color: getBackgroundColor(withinDiet).backIconColor,
  })
)``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
  `}
`;

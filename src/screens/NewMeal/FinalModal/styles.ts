import styled, { css } from 'styled-components/native';

import OffDietSvg from '@assets/images/offDiet.svg';
import WithinDietSvg from '@assets/images/withinDiet.svg';

type TTextProps = {
  withinDiet?: boolean;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Title = styled.Text<TTextProps>`
  ${({ theme, withinDiet }) => css`
    font-size: ${theme.fontSizes.xxl}px;
    font-family: ${theme.fonts.bold};
    color: ${withinDiet
      ? theme.colorsProduct.greenDark
      : theme.colorsProduct.redDark};
    margin-bottom: 8px;
    margin-top: 40%;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colorsBase.gray100};
    text-align: center;
  `}
`;

export const WithinDietImage = styled(WithinDietSvg)`
  width: 224px;
  height: 288px;
  margin: 50px 0;
`;
export const OffDietImage = styled(OffDietSvg)`
  width: 224px;
  height: 288px;
  margin: 50px 0;
`;

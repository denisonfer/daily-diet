import getBackgroundColor from '@utils/getBackgroundColor';
import styled, { css } from 'styled-components/native';

type TContainerProps = {
  withinDiet?: boolean;
};

type TBackgroundProps = TContainerProps & {
  isHalfWidth?: boolean;
};

export const Container = styled.View<TContainerProps>`
  ${({ withinDiet }) => css`
    flex: 1;
    background-color: ${getBackgroundColor(withinDiet).bcgColor};
  `}
`;

export const ViewHighlight = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  margin-top: -60px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg}px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colorsBase.gray100};
    align-self: center;
  `}
`;

export const BackgroundHighlight = styled.View<TBackgroundProps>`
  ${({ withinDiet, isHalfWidth }) => css`
    width: 100%;
    background-color: ${getBackgroundColor(withinDiet).bcgColor};
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 8px;
    margin-top: 16px;
    ${isHalfWidth && 'width: 48%;'}
  `}
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

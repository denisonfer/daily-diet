import styled, { css } from 'styled-components/native';

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})`
  flex: 1;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    flex: 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: -20px;
    padding: 40px 24px;
    background-color: ${theme.colorsBase.gray700};
  `}
`;

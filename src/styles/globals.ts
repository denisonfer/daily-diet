import styled from 'styled-components/native';

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})`
  flex: 1;
  margin-bottom: 20px;
`;

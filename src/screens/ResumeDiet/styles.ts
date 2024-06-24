import getHeaderBcgColor from '@utils/getHeaderBcgColor';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type TContainerProps = {
  withinDiet: boolean;
};

export const Container = styled(SafeAreaView)<TContainerProps>`
  ${({ withinDiet }) => css`
    flex: 1;
    background-color: ${getHeaderBcgColor(withinDiet).bcgColor};
  `}
`;

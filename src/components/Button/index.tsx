import React from 'react';

import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type TProps = TouchableOpacityProps & {
  hasIcon?: boolean;
  title: string;
};
const Button: React.FC<TProps> = ({ hasIcon, title, ...rest }) => {
  return (
    <S.Container {...rest}>
      {hasIcon && <S.Icon />}
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};

export default Button;

import React, { useCallback } from 'react';

import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native';

import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as S from './styles';

type TProps = TouchableOpacityProps & {
  icon?: 'Plus' | 'PencilSimpleLine' | 'Trash';
  title: string;
  outlined?: boolean;
};

const Button: React.FC<TProps> = ({ icon, title, outlined, ...rest }) => {
  const { colorsBase } = useTheme();

  const iconMapper = useCallback(
    (icon: string | undefined, outlined: undefined | boolean) => {
      if (!icon) return null;

      const color = outlined ? colorsBase.gray100 : colorsBase.white;

      const icons: Record<string, () => JSX.Element> = {
        Plus: () => <Plus size={18} color={color} />,
        PencilSimpleLine: () => <PencilSimpleLine size={18} color={color} />,
        Trash: () => <Trash size={18} color={color} />,
      };

      const IconComponent = icons[icon];
      return IconComponent ? <IconComponent /> : null;
    },
    []
  );

  return (
    <S.Container outlined={outlined} {...rest}>
      {icon && iconMapper(icon, outlined)}
      <S.Text outlined={outlined}>{title}</S.Text>
    </S.Container>
  );
};

export default Button;

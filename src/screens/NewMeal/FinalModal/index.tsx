import React, { useCallback } from 'react';

import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import * as S from './styles';

type TProps = {
  withinDiet: boolean;
  modalizeRef: React.RefObject<Modalize>;
};
const FinalModal: React.FC<TProps> = ({ modalizeRef, withinDiet }) => {
  const { navigate } = useNavigation();

  const dynamicTexts = useCallback(() => {
    const title = withinDiet ? 'Continue assim!' : 'Que pena!';
    const subtitle = withinDiet
      ? 'Você continua dentro da dieta. Muito bem!'
      : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!';
    return { title, subtitle };
  }, [withinDiet]);

  const handleNavigateToHome = useCallback(() => {
    modalizeRef.current?.close();
    navigate('Home');
  }, [navigate]);

  return (
    <Modalize ref={modalizeRef} withHandle={false}>
      <S.Container>
        <S.Title withinDiet={withinDiet}>{dynamicTexts().title}</S.Title>
        <S.Subtitle>{dynamicTexts().subtitle}</S.Subtitle>
        {withinDiet ? <S.WithinDietImage /> : <S.OffDietImage />}
        <Button
          title='Ir para a página inicial'
          onPress={handleNavigateToHome}
        />
      </S.Container>
    </Modalize>
  );
};

export default FinalModal;

import React, { useCallback, useEffect, useRef, useState } from 'react';

import Button from '@components/Button';
import Header from '@components/Header';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import * as Crypto from 'expo-crypto';

import { useNavigation, useRoute } from '@react-navigation/native';
import { TNewMeal } from '@shared/interfaces/TNewMeal';
import * as Global from '@styles/globals';
import { Alert, Keyboard } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { addNewMeal, updateMeal } from 'src/storage/Meals';
import FinalModal from './FinalModal';
import * as S from './styles';

type TModeDatePicker = 'date' | 'time';
type TRouteParams = {
  isEditing: boolean;
  meal?: TNewMeal;
};

const NewMeal: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);
  const finalModalRef = useRef<Modalize>(null);
  const { navigate } = useNavigation();
  const route = useRoute();
  const { isEditing, meal } = route.params as TRouteParams;

  const [withinDiet, setWithinDiet] = useState<undefined | boolean>(undefined);
  const [, setShowDatePicker] = useState(false);
  const [mode, setMode] = useState<TModeDatePicker>('date');
  const [newMeal, setNewMeal] = useState<TNewMeal>({
    date: new Date(),
    hour: new Date(),
  } as TNewMeal);

  const showMode = useCallback((currentMode: TModeDatePicker) => {
    Keyboard.dismiss();
    modalizeRef.current?.open();
    setShowDatePicker(true);
    setMode(currentMode);
  }, []);

  const handleSelectDate = useCallback(
    (event: DateTimePickerEvent) => {
      const {
        nativeEvent: { timestamp },
      } = event;
      if (timestamp) {
        if (mode === 'date') {
          setNewMeal((prevState) => ({
            ...prevState,
            date: new Date(timestamp),
          }));
        } else if (mode === 'time') {
          setNewMeal((prevState) => ({
            ...prevState,
            hour: new Date(timestamp),
          }));
        }
        setShowDatePicker(false);
      }
    },
    [mode]
  );

  const handleSelectWithinDiet = useCallback((value: boolean) => {
    setWithinDiet(value);
    setNewMeal((prevState) => ({ ...prevState, withinDiet: value }));
  }, []);

  const handleAddMeal = useCallback(() => {
    if (!newMeal.name || !newMeal.description || withinDiet === undefined)
      return Alert.alert('Erro', 'Preencha todos os campos');

    if (isEditing) {
      updateMeal(newMeal);
      navigate('Home');
      return;
    }

    const id = Crypto.randomUUID();
    const newData = {
      ...newMeal,
      id,
    };
    addNewMeal(newData);

    finalModalRef.current?.open();
  }, [newMeal]);

  useEffect(() => {
    if (isEditing && meal) {
      setNewMeal({
        ...meal,
        date: new Date(meal.date),
        hour: new Date(meal.hour),
      });

      setWithinDiet(meal.withinDiet);
    }
  }, [isEditing, meal]);

  return (
    <S.Container>
      <Header title={isEditing ? 'Editar refeição' : 'Nova refeição'} />
      <Global.Content>
        <Global.Scroll>
          <S.Label>Nome</S.Label>
          <S.Input
            autoFocus
            value={newMeal.name}
            onChangeText={(text) => setNewMeal({ ...newMeal, name: text })}
          />
          <S.Label>Descrição</S.Label>
          <S.Input
            isDescription
            multiline
            value={newMeal.description}
            onChangeText={(text) =>
              setNewMeal({ ...newMeal, description: text })
            }
          />

          <S.Row>
            <S.Column>
              <S.Label>Data</S.Label>
              <S.ButtonDate onPress={() => showMode('date')}>
                <S.ButtonText>
                  {newMeal.date.toLocaleDateString('pt-BR')}
                </S.ButtonText>
              </S.ButtonDate>
            </S.Column>
            <S.Column>
              <S.Label>Hora</S.Label>

              <S.ButtonDate onPress={() => showMode('time')}>
                <S.ButtonText>
                  {newMeal.hour.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </S.ButtonText>
              </S.ButtonDate>
            </S.Column>
          </S.Row>

          <S.Label>Esta dentro da dieta?</S.Label>
          <S.Row>
            <S.Button
              withinDiet={withinDiet === false ? undefined : withinDiet}
              onPress={() => handleSelectWithinDiet(true)}
            >
              <S.Point></S.Point>
              <S.ButtonText>Sim</S.ButtonText>
            </S.Button>
            <S.Button
              withinDiet={withinDiet === true ? undefined : withinDiet}
              onPress={() => handleSelectWithinDiet(false)}
            >
              <S.Point isRed></S.Point>
              <S.ButtonText>Não</S.ButtonText>
            </S.Button>
          </S.Row>
        </Global.Scroll>

        <Button
          onPress={handleAddMeal}
          title={isEditing ? 'Atualizar refeição' : 'Cadastrar refeição'}
        ></Button>
      </Global.Content>

      <Modalize ref={modalizeRef} adjustToContentHeight>
        <S.Modal>
          <DateTimePicker
            value={mode === 'date' ? newMeal.date : newMeal.hour}
            mode={mode}
            is24Hour
            display='spinner'
            maximumDate={new Date()}
            onChange={handleSelectDate}
          />

          <Button
            title='Confirmar'
            onPress={() => modalizeRef.current?.close()}
          />
        </S.Modal>
      </Modalize>

      <FinalModal withinDiet={withinDiet!} modalizeRef={finalModalRef} />
    </S.Container>
  );
};

export default NewMeal;

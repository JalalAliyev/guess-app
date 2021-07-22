import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import BodyText from '../components/body-text';
import CustomButton from '../components/custom-button';
import Card from '../components/card';
import Input from '../components/input';
import NumberContainer from '../components/number-container';
import { reset } from 'yargs';

export interface StartGameProps {
  onStartGame: (num: number) => void;
}

const StartGame: React.FC<StartGameProps> = ({ onStartGame }) => {
  const [value, setValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState<undefined | number>(
    undefined
  );

  const valueInputHandler = (inputText: string) => {
    setValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetValueHandler = () => {
    setValue('');
    setEnteredNumber(undefined);
    setIsConfirmed(false);
  };

  const confirmHandler = () => {
    const num = parseInt(value);
    if (isNaN(num) || num < 1 || num > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99!',
        [{ text: 'Okay', style: 'destructive', onPress: resetValueHandler }]
      );
      return;
    }
    setIsConfirmed(true);
    setEnteredNumber(parseInt(value));
    setValue('');
    Keyboard.dismiss();
  };

  const startGameHandler = () => {
    setValue('');
    if (enteredNumber) {
      onStartGame(enteredNumber);
    }
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Entered Number</Text>
        <NumberContainer number={enteredNumber} />
        <CustomButton
          title='Start Game'
          onClickHandler={startGameHandler}
          style={{ backgroundColor: '#c44569', width: 130 }}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <BodyText style={styles.title}>Let's Start a New Game!</BodyText>
        <Card style={styles.inputContainer}>
          <BodyText>Enter a Number</BodyText>
          <Input onInputChange={valueInputHandler} number={value} />
          <View style={styles.buttonContainer}>
            <CustomButton
              title='Reset'
              onClickHandler={resetValueHandler}
              style={{ backgroundColor: '#F97F51', marginRight: 35 }}
            />
            <CustomButton
              title='Continue'
              onClickHandler={confirmHandler}
              style={{ backgroundColor: '#0097e6' }}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: 300,
    minWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    minWidth: '90%',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0097e6',
    color: '#f5f6fa',
    borderRadius: 9,
  },
  summaryContainer: {
    width: '50%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartGame;

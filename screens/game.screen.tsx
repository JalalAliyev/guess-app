import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView } from 'react-native';
import Card from '../components/card';
import BodyText from '../components/body-text';
import TitleText from '../components/title-text';
import NumberContainer from '../components/number-container';
import CustomButton from '../components/custom-button';

export interface GameProps {
  userGuess: number;
  onGameOver: (numOfRounds: number[]) => void;
}

const generateRandomNum = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min) + min);
  if (randNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return randNum;
  }
};

const Game: React.FC<GameProps> = ({ userGuess, onGameOver }) => {
  const initialGuess = generateRandomNum(1, 100, userGuess);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userGuess) ||
      (direction === 'greater' && currentGuess > userGuess)
    ) {
      Alert.alert(
        "Don't lie",
        'What the Fuck are you doing man??? Enter correct direction!',
        [{ text: 'Sorry!', style: 'cancel' }]
      );
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else if (direction === 'greater') {
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = generateRandomNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setPastGuesses((pastGuess) => [nextGuess, ...pastGuess]);
  };

  useEffect(() => {
    if (currentGuess === userGuess) {
      onGameOver(pastGuesses);
    }
  }, [currentGuess, userGuess, onGameOver]);
  
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttonContainer}>
        <CustomButton
          title='Lower'
          onClickHandler={nextGuessHandler.bind(null, 'lower')}
          style={{ backgroundColor: '#e15f41', borderRadius: 999 }}
        />
        <CustomButton
          title='Greater'
          onClickHandler={nextGuessHandler.bind(null, 'greater')}
          style={{ backgroundColor: '#218c74', borderRadius: 999 }}
        />
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => (
            <View key={guess} style={styles.listItem}>
              <TitleText>#{pastGuesses.length - index}.</TitleText>
              <BodyText>{guess}</BodyText>
            </View>
          ))}
        </ScrollView> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    width: '60%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Game;

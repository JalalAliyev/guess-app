import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Header from './components/header';
import Game from './screens/game.screen';
import StartGame from './screens/start-game.screen';
import GameOver from './screens/game-over.screen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err: any) => console.log(err)}
      />
    );
  }

  const startGameHandler = (enteredNumber: number | null) => {
    setUserNumber(enteredNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds: number[]) => {
    setGuessRounds(numOfRounds.length);
  };

  return (
    <View style={styles.container}>
      <Header title='Guess a Number' />
      {!userNumber && <StartGame onStartGame={startGameHandler} />}
      {!!userNumber && guessRounds === 0 && (
        <Game userGuess={userNumber} onGameOver={gameOverHandler} />
      )}
      {guessRounds > 0 && userNumber && (
        <GameOver
          rounds={guessRounds}
          resultNumber={userNumber}
          onNewGame={startGameHandler}
        />
      )}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

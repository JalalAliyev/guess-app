import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export interface InputProps {
  onInputChange: (inputText: string) => void;
  number: string;
}

const Input: React.FC<InputProps> = ({ number, onInputChange }) => {
  return (
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      keyboardType='numeric'
      maxLength={2}
      style={styles.input}
      value={number}
      onChangeText={onInputChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 70,
    marginBottom: 25,
    textAlign: 'center',
    height: 30,
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
});

export default Input;

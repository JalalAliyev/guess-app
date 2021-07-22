import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface NumberContainerProps {
  number: number | undefined;
}

const NumberContainer: React.SFC<NumberContainerProps> = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 55,
    borderWidth: 2,
    borderColor: '#341f97',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEAE0',
  },
  number: {
    color: '#474787',
    fontSize: 22,
  },
});

export default NumberContainer;

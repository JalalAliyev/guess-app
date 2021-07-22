import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface CardProps {
  style?: {};
  children: JSX.Element[] | JSX.Element;
}

const Card: React.SFC<CardProps> = ({ style, children }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 30,
    padding: 20,
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: '#fff',
    elevation: 5,
  },
});

export default Card;

import React from 'react';
import { StyleSheet, Text } from 'react-native';

export interface TitleTextProps {
  style?: {};
}

const TitleText: React.SFC<TitleTextProps> = ({ children, style }) => {
  return <Text style={[style, styles.body]}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-bold',
    fontSize: 19,
  },
});

export default TitleText;

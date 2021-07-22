import React from 'react';
import { StyleSheet, Text } from 'react-native';

export interface BodyTextProps {
  style?: {};
}

const BodyText: React.SFC<BodyTextProps> = ({ children, style }) => {
  return <Text style={[style, styles.body]}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
    fontSize: 16
  },
});

export default BodyText;

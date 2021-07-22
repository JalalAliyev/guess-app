import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from './title-text';

export interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    marginTop: 22,
    backgroundColor: '#192a56',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#f5f6fa',
    fontWeight: '400',
    fontSize: 18,
  },
});

export default Header;

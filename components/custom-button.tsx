import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export interface CustomButtonProps {
  style?: {};
  title: string;
  onClickHandler: () => void;
}

const CustomButton: React.SFC<CustomButtonProps> = ({
  title,
  style,
  onClickHandler,
}) => {
  return (
    <View style={[styles.button, style]}>
      <Button title={title} onPress={onClickHandler} color='#fff' />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f5f6fa',
    borderRadius: 9,
  },
});

export default CustomButton;

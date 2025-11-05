import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ label, color = '#02CF8E', textColor = '#020202', onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.text(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  }),
  text: (textColor) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});

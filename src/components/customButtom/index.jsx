import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButtom = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#67e8f9',

    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CustomButtom;

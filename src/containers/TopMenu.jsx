import {StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

const TopMenu = ({navigation}) => {
  const redirect = () => {
    navigation.replace('Menu');
  };
  return (
    <Pressable onPress={redirect} style={styles.container}>
      <Icon name="menu" size={35} color="#0ea5e9" />
      <Entypo name="notification" size={30} color="#0ea5e9" />
    </Pressable>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 40,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
});

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemsChat = ({img, text, acudientes, destino, id}) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={img} style={styles.logo} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default ItemsChat;

const styles = StyleSheet.create({
  container: {
    width: 350,
    maxHeight: 160,
    margin: 7,

    padding: 15,
    borderRadius: 10,

    shadowColor: '#0485c8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 7,
    elevation: 12,
    backgroundColor: '#f5f9fc',
  },
  textContainer: {
    padding: 12,
  },
  imgContainer: {
    gap: 15,
    flexDirection: 'row',
  },
  logo: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 25,
  },
  text: {
    color: '#080808',
    fontWeight: '700',
    maxWidth: 150,
    fontSize: 17,
    textAlignVertical: 'center',
  },
});

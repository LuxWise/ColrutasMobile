import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import TopMenu from '../../layout/TopMenu';
import ItemsChat from '../../components/ItemsChat';

const Chat = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Chat</Text>
      </View>
      <ScrollView style={{width: '100%'}}>
        <View style={{padding: 20, alignItems: 'center'}}>
          <ItemsChat
            img={user1}
            text="Emanuel Gonzalez"
            acudientes="Fabian Gonzalez"
            text3="donde sea"
          />
          <ItemsChat
            img={user1}
            text="David Alvarez"
            acudientes="Felipe Alvarez"
            text3="donde sea"
          />
          <ItemsChat
            img={user2}
            text="Juan David Lopez"
            acudientes="Sofia Rincon"
            text3="donde sea"
          />
          <ItemsChat
            img={user2}
            text="Emilia Corredor"
            acudientes="Daniela Martinez"
            text3="donde sea"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f9fc',
    paddingVertical: 20,
  },
  textHeader: {
    color: '#0ea5e9',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 25,
    borderWidth: 2,
    borderColor: '#0ea5e9',
    borderRadius: 10,
  },
});

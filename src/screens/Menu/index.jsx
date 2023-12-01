import {StyleSheet, Text, SafeAreaView, BackHandler} from 'react-native';
import React from 'react';

const Menu = ({navigation}) => {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  const handleBackButton = () => {
    navigation.replace('Home');
    return true;
  };

  const redirict = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView>
      <Text>Menu</Text>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});

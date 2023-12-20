import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomReturn from '../../components/customReturn';
import ItemsList from '../../components/ItemsList';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import TopMenu from '../../layout/TopMenu';
import axios from 'axios';

const ListaRuta = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    axios
      .get('http://10.0.2.2:8080/alumnos/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
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
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn icon="clipboard" onPress={redirict} text="Lista de rutas" />
      <ScrollView style={{width: '100%'}}>
        <View style={{padding: 20, alignItems: 'center'}}>
          {data.map(item => (
            <View key={item.id}>
              <ItemsList
                img={user1}
                text={item.nombre}
                acudientes={item.acudiente}
                destino={item.direccionAlumno}
                id={item.id}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListaRuta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
});

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
import ruta from '../../assets/ruta.png';
import TopMenu from '../../layout/TopMenu';
import ItemsRutas from '../../components/ItemsRutas';
import axios from 'axios';

const ListaRutas = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    axios
      .get('http://10.0.2.2:8080/ruta')
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
      <CustomReturn
        icon="calendar"
        onPress={redirict}
        text="Listado de rutas"
      />
      <ScrollView>
        <View style={{padding: 20, alignItems: 'center'}}>
          {data.map(item => (
            <View key={item.id}>
              <ItemsRutas
                img={ruta}
                text={item.id}
                recogida={item.origen}
                destino={item.destino}
                id={item.id}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListaRutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
});

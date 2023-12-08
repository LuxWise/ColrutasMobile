import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import React from 'react';
import CustomReturn from '../../components/customReturn';
import TopMenu from '../../layout/TopMenu';
import Icon from 'react-native-vector-icons/Feather';
import Mapbox from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(
  'pk.eyJ1IjoibHV4d2lzZSIsImEiOiJjbHBsaHdrc3AwMGFnMmpwbzlvb3djN3BzIn0.wHCHdwIP18_2W6qosGCgcw',
);
Mapbox.setConnected(true);
Mapbox.setTelemetryEnabled(false);

const Rutas = ({navigation}) => {
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 250);

    const fetchData = async () => {
      try {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const current = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setLoading(false);

        setOrigin(current);
      } catch (err) {
        console.error('un error en cargar la ubicaion');
      } finally {
        setLoading(false);
      }
    };
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn icon="map-pin" onPress={redirict} text="Rutas" />
      <View style={styles.mapConatiner}>
        {loading ? (
          <View>
            <Text> Cargando...</Text>
          </View>
        ) : (
          <Mapbox.MapView style={styles.map}>
            <Mapbox.Camera
              zoomLevel={11}
              maxZoomLevel={14}
              centerCoordinate={[-74.103262, 4.653881]}
            />
            <Mapbox.PointAnnotation
              id="marker"
              title="yo"
              snippet="yo"
              coordinate={[-74.151879, 4.603966]}>
              <View style={styles.markContainer}>
                <Icon name="map-pin" size={20} color="#0066CC" />
              </View>
            </Mapbox.PointAnnotation>
            <Mapbox.PointAnnotation
              id="marker"
              title="yo"
              snippet="yo"
              coordinate={[-74.1879, 4.603966]}>
              <View style={styles.markContainer}>
                <Icon name="map-pin" size={20} color="#0066CC" />
              </View>
            </Mapbox.PointAnnotation>
            <Mapbox.PointAnnotation
              id="marker"
              title="yo"
              snippet="yo"
              coordinate={[-74.151879, 4.6966]}>
              <View style={styles.markContainer}>
                <Icon name="map-pin" size={20} color="#0066CC" />
              </View>
            </Mapbox.PointAnnotation>
            <Mapbox.PointAnnotation
              id="marker"
              title="yo"
              snippet="yo"
              coordinate={[-74.103262, 4.653881]}>
              <View style={styles.markContainer}>
                <Icon name="map-pin" size={20} color="#0066CC" />
              </View>
            </Mapbox.PointAnnotation>
          </Mapbox.MapView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Rutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  mapConatiner: {
    marginBottom: 30,
    width: '95%',
    height: '85%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 7,
    elevation: 10,
  },
  markContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  map: {
    flex: 1,
  },
});

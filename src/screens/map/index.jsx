import {StyleSheet, SafeAreaView, View, Text, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import TopMenu from '../../layout/TopMenu';
import Icon from 'react-native-vector-icons/Feather';
import Mapbox from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(
  'pk.eyJ1IjoibHV4d2lzZSIsImEiOiJjbHBsaHdrc3AwMGFnMmpwbzlvb3djN3BzIn0.wHCHdwIP18_2W6qosGCgcw',
);
Mapbox.setConnected(true);
Mapbox.setTelemetryEnabled(false);

const Map = ({navigation}) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Mapa</Text>
      </View>
      <View style={styles.mapConatiner}>
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
              <Icon name="map-pin" size={20} color="#ff5656" />
            </View>
          </Mapbox.PointAnnotation>
        </Mapbox.MapView>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    backgroundColor: '#f5f9fc',
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
  mapConatiner: {
    marginBottom: 30,
    width: '95%',
    height: '78%',
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

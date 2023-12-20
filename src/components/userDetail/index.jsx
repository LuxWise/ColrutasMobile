import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserDetail = ({isDetailOpen, setIsDetailOpen, itemId, img}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:8080/alumnosDetail/${itemId}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Modal visible={isDetailOpen} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.detail}>
          <View style={styles.header}>
            <Icon
              onPress={() => setIsDetailOpen(!isDetailOpen)}
              name="xmark"
              size={35}
              color="#fff"
            />
            <View style={styles.imgContainer}>
              <Image source={img} style={styles.logo} />
            </View>
          </View>
          <View style={styles.textContainer}>
            {data.map(item => (
              <View key={item.id}>
                <Text style={styles.nameText}>{item.nombre}</Text>
              </View>
            ))}
          </View>
          <View style={styles.infoContainer}>
            {data.map(item => (
              <View key={item.id}>
                <Text style={styles.info}>Acudiente: {item.acudiente}</Text>
                <Text style={styles.info}>Documento: {item.documento}</Text>
                <Text style={styles.info}>EPS: {item.eps}</Text>
                <Text style={styles.info}>Curso: {item.curso}</Text>
                <Text style={styles.info}>Grado: {item.grado}</Text>
                <Text style={styles.info}>
                  Direccion: {item.direccionAlumno}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0ea5e91F',
  },
  detail: {
    width: '80%',
    height: '70%',
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    height: '27%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#0ea5e9',
    padding: 20,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#080808',
  },
  textContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  infoContainer: {
    padding: 30,
  },
  info: {
    fontSize: 16,
    fontWeight: '500',
    color: '#080808',
    marginTop: 15,
  },
  imgContainer: {
    alignItems: 'center',
  },
  logo: {
    maxWidth: 90,
    maxHeight: 90,
    borderRadius: 50,
  },
});

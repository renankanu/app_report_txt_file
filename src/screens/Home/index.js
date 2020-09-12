import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Spacer from '../../../styles';
import styles from '../Home/styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer height={30} />
      <Text style={styles.title}>Relatórios</Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Detalhe');
          }}
          style={styles.buttonCard}>
          <Text style={styles.labelButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetalheHtml');
          }}
          style={styles.buttonCard}>
          <Text style={styles.labelButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCard}>
          <Text style={styles.labelButton}>3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

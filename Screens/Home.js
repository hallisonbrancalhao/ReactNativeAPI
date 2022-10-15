import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { styles } from '../styles';

const Home = ({ navigation }) => {

  const endpoint = 'fcde91534c8a4b7e9a6383fda6ba6f41';
  
  const goToCar = () => {
    navigation.navigate('Carros', endpoint)
  }

  const goToPeople = () => {
    navigation.navigate('Pessoas', endpoint)
  }

  const goToMovie = () => {
    navigation.navigate('Filmes', endpoint)
  }

  return(
    <View style={styles.main}>
      <Text style={styles.title}>
        Selecione uma opção
      </Text>
      <Button
        style={styles.button}
        color='white'
        icon="movie-open-settings-outline"
        onPress={goToMovie}>
      Cadastrar Filme
      </Button>
      
      <Button
        style={styles.button}
        color='white'
        icon="car-hatchback"
        onPress={goToCar}>
      Cadastrar Carro
      </Button>

      <Button
        style={styles.button}
        color='white'
        icon="account-multiple-plus"
        onPress={goToPeople}>
      Cadastrar Pessoa
      </Button>
    </View>
  );
};

export default Home;
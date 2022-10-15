import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text, TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import { styles } from '../styles';

const themeWhite = {
  colors: {
    primary: 'white',
    text: 'white',
    placeholder: 'white',
    underlineColor: 'white',
    outlineColor: 'white',
  },
};

const Filmes = ({ navigation, endpoint }) => {

  const [nomeFilme, setNome] = useState();
  const [anoFilme, setAno] = useState();
  const [generoFilme, setGenero] = useState();

  const goToHome = () => {
    navigation.navigate('Home');
  }

  const salvarFilme = async () => {
    await axios.post(`https://crudcrud.com/api/${endpoint}/filmes`, {
      nome: nomeFilme,
      ano: anoFilme,
      genero: generoFilme,
    })
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Cadastrar Filmes</Text>

      <TextInput
      style={styles.input} 
        theme={themeWhite}
        label="Nome do filme" 
        value={nomeFilme} 
        onChangeText={setNome}
      />
      <TextInput
      style={styles.input} 
        theme={themeWhite}
        label="Gênero" 
        value={generoFilme} 
        onChangeText={setGenero}
      />
      <TextInput
      style={styles.input} 
        theme={themeWhite}
        label="Ano" 
        value={anoFilme} 
        onChangeText={setAno}
      />

      <Button
        style={styles.button}
        theme={themeWhite}
        color="white"
        icon="account"
        onSubmit={salvarFilme}>
        CADASTRAR FILME
      </Button>

      <Text style={styles.link} onPress={goToHome}>Voltar ao início</Text>
    </View>
  );
};

export default Filmes;

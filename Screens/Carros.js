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

const Carros = ({ navigation, endpoint }) => {
  
  const [modeloCarro, setModelo] = useState();
  const [anoCarro, setAno] = useState();
  const [corCarro, setCor] = useState();

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const salvarCarro = () => {
    axios.post(`https://crudcrud.com/api/${endpoint}/carros`, {
      modelo: modeloCarro,
      ano: anoCarro,
      cor: corCarro,
    });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Cadastrar Carros</Text>

      <TextInput
        style={styles.input}
        theme={themeWhite}
        label="Modelo"
        value={modeloCarro}
        onChangeText={setModelo}
      />
      <TextInput
        style={styles.input}
        theme={themeWhite}
        label="Cor"
        value={corCarro}
        onChangeText={setCor}
      />
      <TextInput
        style={styles.input}
        theme={themeWhite}
        label="Ano"
        value={anoCarro}
        onChangeText={setAno}
      />

      <Button
        style={styles.button}
        theme={themeWhite}
        color='white'
        icon="account"
        onSubmit={salvarCarro}>
        CADASTRAR CARRO
      </Button>

      <Text style={styles.link} onPress={goToHome}>
        Voltar ao início
      </Text>
    </View>
  );
};

export default Carros;

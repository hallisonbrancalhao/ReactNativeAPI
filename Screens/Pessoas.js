import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
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

const Pessoas = ({ navigation, endpoint }) => {
  
  const [nomePessoa, setNome] = useState();
  const [emailPessoa, setEmail] = useState();
  const [idadePessoa, setIdade] = useState();

  const goToHome = () => {
    navigation.navigate('Home');
  }

  const salvarPessoa = () => {
    axios.post(`https://crudcrud.com/api/${endpoint}/pessoas`, {
      nome: nomePessoa,
      email: emailPessoa,
      idade: idadePessoa,
    })
  }

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Cadastrar Carros</Text>

      <TextInput
      style={styles.input} 
        theme={themeWhite}
        label="Nome" 
        value={nomePessoa} 
        onChangeText={setNome}
      />
      <TextInput
      style={styles.input} 
        theme={themeWhite}
        label="Idade" 
        value={idadePessoa} 
        onChangeText={setIdade}
      />
      <TextInput
      style={styles.input} 
        theme={themeWhite}
        label="Email" 
        value={emailPessoa} 
        onChangeText={setEmail}
      />

      <Button
        style={styles.button}
        theme={themeWhite}
        color="white"
        icon="account"
        onSubmit={salvarPessoa}>
        CADASTRAR PESSOA
      </Button>
      <Text style={styles.link} onPress={goToHome}>Voltar ao início</Text>
    	
    </View>
  );
};

export default Pessoas;

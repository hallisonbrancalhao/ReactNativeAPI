import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carros from './Screens/Carros';
import Home from './Screens/Home';
import Pessoas from './Screens/Pessoas';
import Filmes from './Screens/Filmes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen 
            name="Carros"
            options={{ headerShown: false }}
            component={Carros}
        />
        <Stack.Screen 
            name="Pessoas"
            options={{ headerShown: false }}
            component={Pessoas}
        />
        <Stack.Screen 
            name="Filmes"
            options={{ headerShown: false }}
            component={Filmes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
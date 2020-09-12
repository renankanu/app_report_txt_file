import * as React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './config/ReactotronConfig';
import DetailHtml from './screens/DetailHtml';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhe" component={Detail} />
        <Stack.Screen name="DetalheHtml" component={DetailHtml} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

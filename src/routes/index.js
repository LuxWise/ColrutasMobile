import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ButtomTabs from '../containers/ButtomTabs';
import Rutas from '../screens/Rutas';
import ListaRuta from '../screens/ListaRuta';
import EstadoRutas from '../screens/EstadoRutas';
import Login from '../screens/login';
import Menu from '../screens/Menu';
import TopMenu from '../containers/TopMenu';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={ButtomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rutas"
        component={Rutas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListaRuta"
        component={ListaRuta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EstadoRutas"
        component={EstadoRutas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;

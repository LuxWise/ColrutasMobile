import Routes from './routes/index';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import axios from 'axios';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

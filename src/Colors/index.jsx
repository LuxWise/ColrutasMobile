import {useColorScheme} from 'react-native';

export const backgroundStyle = {
  backgroundColor: useColorScheme() === 'dark' ? '#191a1f' : '#f5f9fc',
  backgroundColorBox: useColorScheme === 'dark' ? '#363dc6' : '#0066CC',
};

export const headerStyle = {
  color: useColorScheme === 'dark' ? '#ffffff' : '#080808',
};

export const textStyle = {
  color: useColorScheme === 'dark' ? '#9fa3b6' : '#080808',
};

export const shadowStyle = {
  shadowColor: useColorScheme === 'dark' ? '#00000040' : '#000000',
  shadowOffset:
    useColorScheme === 'dark' ? {width: 0, height: 4} : {width: 0, height: 0},
  shadowOpacity: useColorScheme === 'dark' ? 1 : 0.19,
  shadowRadius: useColorScheme === 'dark' ? 20 : 5.62,
  elevation: useColorScheme === 'dark' ? 8 : 6,
};

export const borderStyle = {
  borderColor: useColorScheme === 'dark' ? '#191a1f' : '#f0f5ff',
};

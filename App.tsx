import React from 'react';
import {TabBar} from './src/routes/TabBar/app.routes'
import { ThemeProvider } from 'styled-components';
import { useFonts, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway'
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { Home } from "./src/screens/Home";
import { TextScreen } from "./src/screens/Text";
import { CEP } from "./src/screens/CEP";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false,  animationEnabled: false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Text" component={TextScreen}/>
          <Stack.Screen name="CEP" component={CEP}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
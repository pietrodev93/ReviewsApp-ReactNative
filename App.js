
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Home from './screens/home';
import About from './screens/about';
import Header from './shared/header';
import { View, Text } from 'react-native';


const getFonts = () => {
  return Font.loadAsync({
    'Roboto-regular': require('./assets/fonts/Roboto_Mono/RobotoMono-VariableFont_wght.ttf')
  })
}

const Drawer = createStackNavigator();

function App({navigation}) {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if(fontsLoaded){
    return(
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={Home}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} options={ { title: 'Dettagli'} }/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
  
}

export default App;
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import * as Fonts from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/helpers/Routes';

const App = () => {

  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
    SplashScreen.preventAutoHideAsync();
      //loading Fonts
      await Fonts.loadAsync({
        "Play-Bold": require('./assets/fonts/Play-Bold.ttf'),
        "Play-Regular": require('./assets/fonts/Play-Regular.ttf'),
      });
      setIsFontLoaded(true);
      SplashScreen.hideAsync();
    }
    loadFonts();
  }, []);

  return (
    <SafeAreaView className="bg-[#0B0711] flex-1">
      <StatusBar backgroundColor={'#261D37'} />
      {isFontLoaded ? (
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      ) : (
        <Text className="items-center justify-center">
          Lagecy Can't be Load!
        </Text>
      )}
    </SafeAreaView>
  );
}

export default App;

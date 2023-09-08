import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Fonts from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/helpers/Routes';
import { ThemeContext } from './src/context/ThemeContext';

const App = () => {

  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [theme, setTheme] = useState({ mode: 'light' });

  const updateTheme = (newTheme) => {
    if (!newTheme) {
      let mode;
      mode = theme.mode === 'dark' ? 'light' : 'dark';
      newTheme = { mode };
    }

    setTheme(newTheme);
  };

  useEffect(() => {
    async function loadFonts() {
      SplashScreen.preventAutoHideAsync();
      //Loading Fonts
      await Fonts.loadAsync({
        'ChakraPetch-Bold': require('./assets/fonts/ChakraPetch-Bold.ttf'),
        'ChakraPetch-BoldItalic': require('./assets/fonts/ChakraPetch-BoldItalic.ttf'),
        'ChakraPetch-Italic': require('./assets/fonts/ChakraPetch-Italic.ttf'),
        'ChakraPetch-Light': require('./assets/fonts/ChakraPetch-Light.ttf'),
        'ChakraPetch-LightItalic': require('./assets/fonts/ChakraPetch-LightItalic.ttf'),
        'ChakraPetch-Medium': require('./assets/fonts/ChakraPetch-Medium.ttf'),
        'ChakraPetch-MediumItalic': require('./assets/fonts/ChakraPetch-MediumItalic.ttf'),
        'ChakraPetch-SemiBold': require('./assets/fonts/ChakraPetch-SemiBold.ttf'),
        'ChakraPetch-SemiBoldItalic': require('./assets/fonts/ChakraPetch-SemiBoldItalic.ttf'),
      });

      setIsFontLoaded(true);
      SplashScreen.hideAsync();
    }
    loadFonts();
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
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
    </ThemeContext.Provider>
  );
}

export default App;

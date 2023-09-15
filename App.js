import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeContext } from './src/context/ThemeContext';
import { persistCache } from 'apollo3-cache-persist';
import * as Fonts from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/helpers/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';


const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://13.36.254.232/graphql',
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});


const App = () => {

  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [theme, setTheme] = useState({ mode: 'dark' });
  const [loadingCache, setLoadingCache] = useState(true);


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
  }, []);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);



  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;

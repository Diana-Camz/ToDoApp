import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen';
import Loader from './src/components/Loader';
import { useCallback, useEffect, useState } from 'react';
import { UserProvider } from './src/context/userContext';

SplashScreen.preventAutoHideAsync()

const App= () => {
   const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
        const prepareApp = async () => {
          try {
            await new Promise(resolve => setTimeout(resolve, 2000))
          } catch(err) {
            console.warn('Error during splash screen loading:', err);
          } finally {
            setAppIsReady(true)
          }
      };
      prepareApp();
  }, []);


  const onLayoutRootView = useCallback(async () => {
      if(appIsReady) {
        await SplashScreen.hideAsync();
      };
  }, [appIsReady]);

  if (!appIsReady) {
      return <Loader />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <Navigation />
        </NavigationContainer>
      </UserProvider>
    </GestureHandlerRootView>
  );
}

export default App;

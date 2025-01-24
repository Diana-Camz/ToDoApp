import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const App= () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

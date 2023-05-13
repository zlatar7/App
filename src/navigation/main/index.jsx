import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

import { Home, Categories, Products } from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

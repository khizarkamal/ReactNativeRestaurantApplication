import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SearchScreen from './screens/SearchScreen';
import SingleResultScreen from './screens/SingleResultScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={SingleResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Entrar from './entrar/index';
import Cadastrar from './cadastrar/index';
import Home from '../../pages/home';

export default function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Entrar" component={Entrar}
            options={{
              title: '', headerShown: false
            }}
          />
          <Stack.Screen name="Cadastrar" component={Cadastrar}
            options={{
              title: '', headerShown: false
            }}
          />
          <Stack.Screen name="Home" component={Home}
            options={{
              title: '', headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
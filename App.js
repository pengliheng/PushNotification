import React from 'react';
import { Provider } from 'mobx-react'
import { SafeAreaView, Text } from 'react-native';
import { stores } from './stores'
import { router } from './routes'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@modules/common/screens/login/loginScreen'
import { RegisterScreen } from '@modules/common/screens/register/registerScreen'


const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    // <SafeAreaView>
      <Provider store={stores}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Router /> */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    // </SafeAreaView>
  );
};


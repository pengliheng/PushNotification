import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';

export const LoginScreen = function () {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  function handlePress() {}

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
        <Button onPress={() => handlePress()} title="Login"></Button>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
};

import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles'

export const RegisterScreen = function () {
    console.log('register');
    return <View style={{backgroundColor: 'red'}}>
        <Text>RegisterScreen</Text>
        <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}
            title="Press Me"
        >
        </Button>
    </View>
}
import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

export const LoginScreen = function () {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        requestUserPermission();
        // const subscriber = auth().onAuthStateChanged(user => {
        //     setUser(user);
        //     if (initializing) setInitializing(false);
        // });
        // return subscriber;
    }, []);

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            iosClientId: 'com.googleusercontent.apps.423999831269-jhptcko0ta4ttmmgki07me04ncasfmg1', // only for iOS
            // iosClientId: '1075944128265-mrtrohjdjv9i7vpdn37e5frkfj6a60gb.apps.googleusercontent.com',
            hostedDomain: '', // specifies a hosted domain restriction
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
            accountName: '', // [Android] specifies an account name on the device that should be used
        });
        setInitializing(false);
    }
    function handleLogin() {
        auth()
            .signInAnonymously()
            .then(() => {
                console.log('User signed in anonymously');
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    console.log('Enable anonymous in your firebase console.');
                }
                console.error(error);
            });
    }

    async function handleSignIn() {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({userInfo});
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    if (initializing)
        return (
            <>
                <Text>Loading</Text>
            </>
        );

    if (!user) {
        return (
            <View>
                <Text>Login</Text>
                <Button onPress={handleLogin} title="Login"></Button>
                <GoogleSigninButton
                    onPress={handleSignIn}
                    title="Google Sign in"></GoogleSigninButton>
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome {user.email}</Text>
        </View>
    );
};

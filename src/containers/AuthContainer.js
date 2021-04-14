import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import ScanScreen from '../screens/ScanScreen';
import ResultsScreen from '../screens/ResultsScreen';
import PhoneVerification from '../screens/PhoneVerification'
import { signIn } from '../store/actions/auth';
import logoImg from '../assets/logo.png';
import { Colors, Styles } from '../styles';

const Stack = createStackNavigator();

const AuthContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const isAuthed = useSelector((state) => !!state.auth.phoneNumber);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadAuthFromStore = async () => {
      try {
        const authJson = await AsyncStorage.getItem('auth');
        if (authJson) {
          const { name, email, phoneNumber } = JSON.parse(authJson);
          //dispatch(signIn(name, email, phoneNumber));
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthFromStore();
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={Styles.container}>
        <ActivityIndicator size="large" color={Colors.white} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image source={logoImg} style={Styles.headerLogo} />
          ),
          headerBackTitle: null,
        }}
      >
        <Stack.Screen
          name="Sign In"
          component={SignInScreen}
          options={() => ({ headerShown: false })}
        />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={() => ({
            headerStyle: {
              elevation: 0, // Remove shadow on Android
              shadowOpacity: 0, // Remove shadow on iOS
              backgroundColor: Colors.primary,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthContainer;

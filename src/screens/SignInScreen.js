import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { Colors, Styles } from '../styles';
import { signIn } from '../store/actions/auth';
import logoImg from '../assets/logo.png';
import auth from '@react-native-firebase/auth'

const SignInScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const validatePhoneNumber = value => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(value)
  }

  const handleSendCode = (phoneNumber) => {

    if (validatePhoneNumber(phoneNumber)) {
      auth()
        .signInWithPhoneNumber(phoneNumber)
        .then(confirmResult => {
           //console.log(confirmResult);
           //navigation.navigate('Verify', {confirmResult});
           props.navigation.navigate('PhoneVerification',{confirmResult});
        })
        .catch(error => {
          alert(error.message)
        })
    } else {
      alert('Invalid Phone Number');
    }
  }

  const onNextPress = async () => {
    dispatch(signIn(name, email, phoneNumber));
    // await AsyncStorage.setItem(
    //   'auth',
    //   JSON.stringify({ name, email, phoneNumber }),
    // );
    handleSendCode("+" + phoneNumber);
  };

  return (
    <View style={Styles.container}>
      <Image source={logoImg} style={Styles.signInLogo} />
      <TextInput
        style={Styles.input}
        value={name}
        autoCapitalize="words"
        placeholder="Name"
        placeholderTextColor={Colors.white}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={Styles.input}
        value={email}
        keyboardType="email-address"
        placeholder="Email"
        placeholderTextColor={Colors.white}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={Styles.input}
        value={phoneNumber}
        keyboardType="numeric"
        placeholder="Phone Number"
        placeholderTextColor={Colors.white}
        onChangeText={(value) => setPhoneNumber(value)}
      />
      <TouchableOpacity style={Styles.button} onPress={onNextPress}>
        <Text style={Styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInScreen;

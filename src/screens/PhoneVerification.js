import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, Styles } from '../styles';
import logoImg from '../assets/logo.png';

const PhoneVerification = ({navigation,route}) => {
    const {confirmResult} = route.params;
    console.log(confirmResult);
    const [code, setCode] = useState('')
    const handleVerifyCode = () => {
        if (code.length == 6) {
            confirmResult
                .confirm(code)
                .then(user => {
                   navigation.navigate('Scan');
                })
                .catch(error => {
                    alert(error.message)
                })
        }
        else {
            alert('Please enter a 6 digit OTP code.');
        }
    }

    return (
        <View style={Styles.container}>
            <Image source={logoImg} style={Styles.signInLogo} />
            <TextInput
                style={Styles.input}
                //value={phoneNumber}
                keyboardType="numeric"
                placeholder="Verify Code"
                placeholderTextColor={Colors.white}
                onChangeText={(value) => setCode(value)}
            />
            <TouchableOpacity style={Styles.button} onPress={handleVerifyCode}>
                <Text style={Styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
};
PhoneVerification.propTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        confirmResult: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  };
export default PhoneVerification;
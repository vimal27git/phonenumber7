import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import { Styles } from '../styles';

const ScanScreen = ({ navigation }) => {
  const onBarCodeRead = ({ data }) => {
    const { location, imageUrl, points } = JSON.parse(data);
    navigation.navigate('Results', { location, imageUrl, points });
  };

  return (
    <View style={Styles.container}>
      <RNCamera
        style={Styles.camera}
        captureAudio={false}
        onBarCodeRead={onBarCodeRead}
      >
        <BarcodeMask
          showAnimatedLine={false}
          outerMaskOpacity={0.5}
          edgeBorderWidth={1}
        />
      </RNCamera>
    </View>
  );
};

ScanScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ScanScreen;

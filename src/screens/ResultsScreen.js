import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Styles } from '../styles';

const ResultsScreen = ({ route }) => {
  const { location, imageUrl, points } = route.params;

  const name = useSelector((state) => state.auth.name);

  return (
    <View style={Styles.container}>
      <View style={Styles.card}>
        <View style={Styles.cardImageContainer}>
          <Image source={{ uri: imageUrl }} style={Styles.cardImage} />
        </View>
        <View style={Styles.cardTextContainer}>
          <Text style={Styles.cardSubtext}>Welcome</Text>
          <Text style={Styles.cardText}>{name}</Text>
          <Text style={Styles.cardSubtext}>to</Text>
          <Text style={Styles.cardText}>{location}</Text>
          <Text style={Styles.cardSubtext}>You&apos;ve just earned</Text>
          <Text style={Styles.cardText}>{points} points!</Text>
        </View>
      </View>
    </View>
  );
};

ResultsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      location: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ResultsScreen;

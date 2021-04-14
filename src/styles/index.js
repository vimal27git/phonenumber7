import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#465f7e',
  secondary: '#ff1414',
  white: '#ffffff',
};

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  headerLogo: {
    height: 17,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  signInLogo: {
    height: 40,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    width: '75%',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    marginVertical: 20,
    color: 'white',
  },
  button: {
    height: 40,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
  buttonText: {
    color: Colors.primary,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  card: {
    width: '75%',
    // height: '80%',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  cardImageContainer: {
    width: '100%',
    height: '40%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  cardTextContainer: {
    width: '100%',
    // height: '60%',
    padding: 20,
  },
  cardImage: {
    height: '100%',
    width: '100%',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.primary,
  },
  cardSubtext: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

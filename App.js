import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen';
import AuthContainer from './src/containers/AuthContainer';
import authReducer from './src/store/reducers/auth';

const reducer = combineReducers({
  auth: authReducer,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));

const App = () => {
  useEffect(() => {

    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  );
};

export default App;

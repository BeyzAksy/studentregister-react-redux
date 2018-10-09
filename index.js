import { AppRegistry } from 'react-native';
import firebase from 'firebase';

import App from './App';

const config = {
  apiKey: 'AIzaSyCQ8SQJRevFl04raPgRZfiCSecCtt6y0D0',
  authDomain: 'studentregister-4203f.firebaseapp.com',
  databaseURL: 'https://studentregister-4203f.firebaseio.com',
  projectId: 'studentregister-4203f',
  storageBucket: '',
  messagingSenderId: '601674317381'
};
firebase.initializeApp(config);

AppRegistry.registerComponent('studentregister', () => App);

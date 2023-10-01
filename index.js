import React from 'react';
import { AppRegistry } from 'react-native';
import { GoogleFontsLoader } from 'react-native-google-fonts';

import App from './App'; // Seu componente principal

// Configuração da fonte
const fontsConfig = {
  'open-sans': {
    // Nome da fonte no Google Fonts
    uri: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
  },
};

GoogleFontsLoader.load(fontsConfig);

AppRegistry.registerComponent('MyApp', () => App);
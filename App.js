import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable, Image, Dimensions  } from 'react-native';

import image from './assets/image.png';

const screenWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Barber
        <Text style={styles.orangeText}>Book</Text>
      </Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.headline}>Agende seu estilo com <Text 
        style={styles.orangeText}>facilidade</Text>!</Text>
      <Pressable 
        title="Fazer login" 
        style={styles.button}
        /* onPress={handlePress} */
      >
        <Text style={styles.buttonText}>Fazer Login</Text>
      </Pressable>
      <Text style={styles.subText}>
        Não tem uma conta ainda? <Text 
        style={styles.orangeText}>
          Registre-se aqui!
        </Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C5B5C',
    alignItems: 'center',
    justifyContent: 'end',
  },
  logo: {
    fontSize: 24,
    fontWeight: 700,
    color: '#D9D9D9',
    position: 'absolute',
    top: 36,
    zIndex: -1,
  },
  image: {
    width: screenWidth,
    height: screenWidth * 1.5,
    position: 'absolute',
    top: 98,
    zIndex: -1,
  },
  headline: {
    fontSize: 42,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 54,
    color: '#D9D9D9',
  },
  button: {
    width: screenWidth - 32,
    backgroundColor: '#FB5607',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
    color: '#FFF',
  },
  orangeText: {
    color: '#FB5607',
  },
  subText: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 54,
  }
});

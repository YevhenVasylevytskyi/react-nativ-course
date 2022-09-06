import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import LoginScreen from './Screens/LoginScreen.js';
// import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!!!</Text>
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useState} from 'react'

export default function App() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgraundImage}
        source={require('./assets/images/backgraund-image.jpg')}
      > 
        <View style={styles.content}>
          <View style={styles.form}>
            <Text>Увійти</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Login"
              value={loginValue}
              // onChangeText={inputHandler}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              value={passwordValue}
              // onChangeText={inputHandler}
            />
            <TouchableOpacity
              style={styles.button}
              // onPress={onPress}
            >
              <Text
                style={styles.buttomTitle}
              >
                Увійти
              </Text>
            </TouchableOpacity>
            <Text style={styles.regText}
            >
              Немає аккаунуту? Зареєструватись
            </Text>
        </View>
        </View>  
        <StatusBar style="auto" />
      </ImageBackground>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  backgraundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end'
  },
  form: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    
  },
  content: {
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    borderRadius : 10,
    borderColor: 'red',
    alignItems: "center",
    justifyContent: "center",

    
    padding: 5,
    backgroundColor: '#fff'

  },
  button: {
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 100,
    // height: 32,
    // weigth: 100,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FF6C00',
    marginBottom: 16,
  },
  buttomTitle: {    
    color:'#fff',
  },
  regText: {
    
    marginBottom: 144,  
  }
});

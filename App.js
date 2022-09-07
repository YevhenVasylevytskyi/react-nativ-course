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
            <View style={styles.titleViev}>
              <Text style={styles.titleText}>Увійти</Text>
            </View>
            <View style={styles.textInput}>
              <TextInput                
                placeholder="Login"
                // value={loginValue}
                // onChangeText={inputHandler}
              />
            </View>
            <View style={styles.textInput}>
              <TextInput                
                placeholder="Password"
                // value={passwordValue}
                // onChangeText={inputHandler}
              />
            </View>            
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
            <View style={styles.regViev}>
              <Text style={styles.regText}>
                Немає аккаунуту? Зареєструватись
              </Text>
            </View>
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
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  titleViev: {
    marginTop: 32,
    marginBottom: 32,
    alignItems: "center",
    fontSize: 30,
  },
  titleText: {
    fontSize: 30,
  },
  textInput: {
    fontSize: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: "start",
    // justifyContent: "center",
    // alignItems: 'center',    
    padding: 16,
    backgroundColor: '#F6F6F6',
    marginBottom: 16,

  },
  button: {
    alignItems: "center",
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#FF6C00',
    marginBottom: 16,
    marginTop: 27,
  },
  buttomTitle: {    
    color:'#fff',
  },
  regViev: {
    alignItems: "center",
  },
  regText: {
    marginBottom: 144,
    fontSize: 16,
  }
});

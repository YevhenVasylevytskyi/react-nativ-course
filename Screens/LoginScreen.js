import React from "react";
import {
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useState } from 'react'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const initialState = {
  email: '',
  password: ''
}

const loudApplication = async () => {
  await Font.loadAsync({
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf')
  })

}

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady,setIsReady] = useState(false);


  const keyboardHide = () => {
    setIsShowKeyboard(false)
    Keyboard.dismiss()
  }

  const sendForm = () => {
    keyboardHide()
    console.log(state)
    setState(initialState)
  }

  if (!isReady) {
    return <AppLoading
      startAsync={loudApplication}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  }

  return (
    <TouchableWithoutFeedback
      onPress={keyboardHide}
    >
      <View style={styles.container}>
        
        <ImageBackground
          style={styles.backgraundImage}
          source={require('../assets/images/backgraund-image.jpg')}
        >
          <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}            
          >       
            <View style={styles.content}>          
              <View style={{...styles.form, marginBottom: isShowKeyboard ? 32 : 144}}>
                <View style={styles.titleViev}>
                  <Text style={styles.titleText}>Увійти</Text>
                </View>
                <View style={styles.textInput}>
                  <TextInput
                    style={styles.textInputText}
                    placeholder="Адреса елекронної пошти"
                    onFocus={()=>setIsShowKeyboard(true)}
                    value={state.email}
                    onChangeText={(value) => setState((prevState)=>({...prevState, email: value}))}
                  />
                </View>
                <View style={styles.textInput}>
                  <TextInput
                    style={styles.textInputText}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    onFocus={()=>setIsShowKeyboard(true)}
                    value={state.password}                  
                    onChangeText={(value) => setState((prevState)=>({...prevState, password: value}))}
                  />
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={sendForm}
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
          </KeyboardAvoidingView>                
          </ImageBackground>          
      </View>
    </TouchableWithoutFeedback>
  )};

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
    // marginBottom: 144,
  },
  titleViev: {
    marginTop: 32,
    marginBottom: 32,
    alignItems: "center",
    fontSize: 30,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',   
    padding: 16,
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
  },
  textInputText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
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
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  regViev: {
    alignItems: "center",
  },
  regText: {
    // marginBottom: 144,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  }
});
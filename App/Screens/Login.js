import { NavigationHelpersContext } from '@react-navigation/core';
import React from 'react';
import {
  Keyboard, Text, View, 
  TextInput, TouchableWithoutFeedback, 
  KeyboardAvoidingView, Button
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from "../Styles/style";

export default function Login() {

  const navigation = useNavigation();
  
  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback >
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>FitPlus</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}/>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" 
              style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onLoginPress()}
              title="Login"
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onSignInPress()}
              title="SignUp"
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => onGoogleAuthPress()}
              title="Login with Google"
              color="#D32F2F" //red
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );

  function onLoginPress(){
    //auth - user e senha
    //if ok
    navigation.navigate('Home')
  }
  function onSignInPress(){
    //auth 
    //if ok
    navigation.navigate('SignUp')
  }
  function onGoogleAuthPress(){
    //google API
    //auth - user e senha
    //if ok
    // navigation.navigate('Home')
    alert("Você é o bichão mesmo hein");
  }
  
}





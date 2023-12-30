// TODO: Make 'Login' and 'Let's Get Started' buttons same height and round off bottom of 'Let's Get Started' button

import React from 'react'
import Colors from "@constants/Colors";
import { CenturyGothicText } from "@components/StyledText";
import { GeorgiaBoldText } from "@components/StyledText";
import { View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { useRouter } from 'expo-router';

import CustomBlurView from '@components/auth/CustomBlurView';

const { width, height } = Dimensions.get('window');

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={require('@assets/images/auth-flow/ford-escort.png')}
        resizeMode='cover'
        style={styles.imageBackgroundContainer}
      >
        <CustomBlurView intensity={25} tint='light' text='Hello!' />
        <CenturyGothicText style={styles.welcomeMessage}>Explore new cars, new people, and new ideas.</CenturyGothicText>
      </ImageBackground>
      <View style={styles.buttonsContainer}>
        {/* Login + Let's Get Started buttons go here */}
        <TouchableOpacity
          onPress={()=> router.push('/login')}
          style={styles.loginButton}
          activeOpacity={.6}
        >
          <GeorgiaBoldText style={styles.loginText}>Login</GeorgiaBoldText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> console.log('Sign Up Button Pressed.')}
          style={styles.signUpButton}
        >
          <GeorgiaBoldText style={styles.signUpText}>Let's Get Started</GeorgiaBoldText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.primaryContainerBackground
  },
  imageBackgroundContainer: {
    flex: .8,
    width: '100%',
    justifyContent: 'flex-start', // ! This may need to be removed/modified for positioning other elements
    alignItems: 'flex-start',
  },
  welcomeMessage: {
    zIndex: 1,
    width: '60%',
    color: Colors.dark.primaryText,
    fontSize: .03 * height,
    marginLeft: .05 * width,
    lineHeight: .05 * height,
    bottom: -0.35 * height,
  },
  buttonsContainer: {
    flex: .3,
    width: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
    justifyContent: 'flex-end',
    marginBottom: .05 * height,
  },
  loginButton: {
    height: 'auto',
    width: '80%',
    backgroundColor: Colors.dark.authLightButtonBackground,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpButton: {
    height: 'auto',
    width: '90%',
    backgroundColor: Colors.dark.authAccentButtonBackground,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.dark.primaryContainerBackground,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: .6,
    shadowRadius: 10,
    },
  loginText: {
    color: Colors.dark.secondaryText,
    fontSize: .025 * height,
    marginVertical: .03 * height,
  },
  signUpText: {
    color: Colors.dark.secondaryText,
    fontSize: .025 * height,
    marginVertical: .03 * height,
    marginLeft: -.09 * width,
  }
})

export default Index
import React, {useEffect} from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { CenturyGothicInput, CenturyGothicRNEInput, CenturyGothicText, GeorgiaBoldText } from '@components/StyledText';
import Colors from '@constants/Colors';
import { SocialIcon } from '@rneui/themed';
import { Image } from 'expo-image';
import CustomDivider from '@components/Divider';
import { BlurView } from 'expo-blur';
import { useAuth } from '@contexts/AuthContext';
import { useRouter } from 'expo-router';

const {height, width} = Dimensions.get('window')
const googleSignInIcon = require('@assets/social-auth-logos/google/ios_neutral_rd_na.svg');
const appleSignInIcon = require('@assets/social-auth-logos/apple/png-logo-only-black.png');

const LoginForm = () => {
  // initialize router
  const router = useRouter();

  // states + logic from AuthContext.tsx
  const { 
    email, 
    setEmail,
    password,
    setPassword,
    handleSignIn,
    loading,
    error,
    session
  } = useAuth();

  // handle continue button press
  // TODO: Add a middle step for MFA challenge
  const onContinuePress = async () => {
    try {
      await handleSignIn();
    } catch (e) {
      console.log(e);
    }
  };

  // Navigate to main app if user is logged in
  useEffect(() => {
    if (session) {
      router.replace('/(main)');
    }
  }, [session]);
  

  return (
    <View style={styles.loginFormContainer}>
        {/* Social Icons */}
        <View style={styles.socialIconRowContainer}>
          {/* FB Icon */}
          <TouchableOpacity style={styles.buttonWrapper}>
            <SocialIcon type='facebook' light={true} iconColor='blue' iconSize={30}/>
          </TouchableOpacity>
          {/* Google Icon */}
          <TouchableOpacity style={styles.buttonWrapper}>
            <Image source={googleSignInIcon} style={{ height: 60, width: 60}}/>
          </TouchableOpacity>
          {/* Apple Icon */}
          <TouchableOpacity style={styles.buttonWrapper}>
            <Image source={appleSignInIcon} style={{ height: 60, width: 60, overflow: 'hidden', borderRadius: 50}}/>
          </TouchableOpacity>
        </View>
        {/* OR Divider */}
        <View style={styles.formDivider}>
          <CustomDivider dividerStyle={styles.dividerStyle} height={'5%'} />
          <CenturyGothicText style={{ fontSize: .02 * height, color: Colors.dark.primaryText }}>OR</CenturyGothicText>
          <CustomDivider dividerStyle={styles.dividerStyle} height={'5%'} /> 
        </View>
        {/* Email/Password Form */}
        {/* //TODO: Add errorMessage w/ user-friendly error messaging + look into rendering rightIcon (check mark in accent color) conditional upon correct input */}
        <View style={styles.emailPasswordFormContainer}>
          {/* Email Input */}
          <BlurView intensity={30} tint='light' style={{ overflow: 'hidden', height: .07 * height, borderRadius: .3 * width}}>
            <CenturyGothicRNEInput 
              style={{ fontSize: .02 * height, color: Colors.dark.primaryText, backgroundColor: 'transparent', width: '80%', height: '100%'}} 
              leftIcon={{ type: 'evilicon', name: 'envelope', color: Colors.dark.primaryText }}
              leftIconContainerStyle={{ alignSelf: 'center', marginHorizontal: 10 }}
              placeholder='Email' 
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
              keyboardType='email-address'
              placeholderTextColor={Colors.dark.primaryText} 
            />
          </BlurView>
          {/* Password Input */}
          <BlurView intensity={30} tint='light' style={{ overflow: 'hidden', height: .07 * height, borderRadius: .3 * width}}>
            <CenturyGothicRNEInput 
              style={{ fontSize: .02 * height, color: Colors.dark.primaryText, backgroundColor: 'transparent', width: '80%', height: '100%'}} 
              leftIcon={{ type: 'evilicon', name: 'unlock', color: Colors.dark.primaryText, size: 30 }}
              leftIconContainerStyle={{ alignSelf: 'center', marginHorizontal: 8 }}          
              value={password}
              onChangeText={setPassword}
              placeholder='Password'
              keyboardType='default'
              secureTextEntry={true} 
              placeholderTextColor={Colors.dark.primaryText} 
            />
          </BlurView>
          {/* Continue Button */}
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={onContinuePress}
          >
            <GeorgiaBoldText style={{ fontSize: .02 * height, color: Colors.dark.secondaryText }}>Continue</GeorgiaBoldText>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginFormContainer: {
        position: 'absolute',
        bottom: .2 * height,
        zIndex: 3,
        height: .4 * height,
        width: '80%',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIconRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      // borderWidth: 1,
      // borderColor: 'red',
    },
    buttonWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'green',
      height: 70,
      width: 70,

    },
    dividerStyle: {
      width: '30%', 
      alignSelf: 'center'
    },
    formDivider: {
      marginVertical: .02 * height,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
    },
    emailPasswordFormContainer: {
      height: '70%',
      width: '100%',
      justifyContent: 'space-evenly',
      // backgroundColor: 'red'
    },
    continueButton: {
      backgroundColor: Colors.dark.secondaryContainerBackground, 
      height: .07 * height,
      borderRadius: .3 * width, 
      justifyContent: 'center', 
      alignItems: 'center'
    }
    
})

export default LoginForm
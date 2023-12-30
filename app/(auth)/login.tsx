import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@constants/Colors';
import { Link } from 'expo-router';
import { CenturyGothicItalicText } from '@components/StyledText';
import { CenturyGothicBoldItalicText } from '@components/StyledText';
import CustomBlurView from '@components/auth/CustomBlurView';
import LoginForm from '@components/auth/LoginForm';
import { StatusBar } from 'expo-status-bar';


const { height, width } = Dimensions.get('window');

const Login = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.container}>
        <StatusBar style='light' />
        <ImageBackground
            source={require('@assets/images/auth-flow/f40.png')}
            resizeMode='cover'
            style={styles.imageBackgroundContainer}
        >
            <CustomBlurView intensity={25} tint='light' text="Login" />
        </ImageBackground>
        <View style={styles.lowerContainer}>
            <LoginForm />
            <Link href='/' style={{ color: 'white'}}>Back to Start (DEV. ONLY)</Link>
            <View style={styles.signUpMessage}>
                <CenturyGothicItalicText style={{ fontSize: .015 * height, color: Colors.dark.secondaryContainerBackground}}> Don't Have an Account?</CenturyGothicItalicText>
                <CenturyGothicBoldItalicText style={{ fontSize: .015 * height, color: Colors.dark.appAccent, textDecorationLine: 'underline' }}>Sign Up Here</CenturyGothicBoldItalicText>
            </View>
        </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.primaryContainerBackground,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imageBackgroundContainer: {
        flex: .8,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    // blurViewContainer: {
    // },
    lowerContainer: {
        zIndex: 2,
        flex: .3,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpMessage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: .04 * width,
        width: 'auto',
        height: '20%',
        // borderWidth: 1,
        // borderColor: 'red'
    }
})

export default Login
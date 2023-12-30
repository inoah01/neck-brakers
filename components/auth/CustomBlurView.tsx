// Custom BlurView component for use on auth flow screens
// Takes in intensity, tint, and text to display (using GeorgiaBoldText)

import React from 'react';
import { BlurView } from 'expo-blur';
import { StyleSheet, Dimensions, ViewStyle, StyleProp } from 'react-native';
import { GeorgiaBoldText } from '@components/StyledText';
import Colors from '@constants/Colors';


interface CustomBlurViewProps {
    intensity: number;
    tint: 'light' | 'dark' | 'default';
    text: string
    styleProps?: StyleProp<ViewStyle>
}

const { width, height } = Dimensions.get('window');

const CustomBlurView: React.FC<CustomBlurViewProps> = ({ intensity, tint, text, styleProps }) => {
    return (
        <BlurView
            intensity={intensity}
            tint={tint}
            style={[styles.blurViewContainer, styleProps]}
        >
            <GeorgiaBoldText style={styles.blurViewText}>{text}</GeorgiaBoldText>
        </BlurView>
    )
}

const styles = StyleSheet.create({
    blurViewContainer: {
        height: 'auto',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginVertical: .05 * height,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
      },
      blurViewText: {
        color: Colors.dark.primaryText,
        fontSize: .04 * height,
        marginVertical: .015 * height,
        marginLeft: .05 * width,
        marginRight: .15 * width,
      },
});

export default CustomBlurView
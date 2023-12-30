import React from 'react';
import { View, StyleProp, ViewStyle, DimensionValue } from 'react-native';
import Colors from '@constants/Colors';

interface DividerProps {
  width?: number | string;
  height?: number | string;
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  dividerStyle?: StyleProp<ViewStyle>;
}

const CustomDivider: React.FC<DividerProps> = ({
  width = 1,
  height = 1,
  orientation = 'horizontal',
  color = Colors.dark.primaryText,
  dividerStyle,
}) => {
  const dividerStyles: StyleProp<ViewStyle> = [
    orientation === 'horizontal' ? { width: '100%', height: height as DimensionValue } : { height: '100%', width: width as DimensionValue },
    { backgroundColor: color },
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
};

export default CustomDivider;

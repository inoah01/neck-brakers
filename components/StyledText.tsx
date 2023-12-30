import { Text, TextProps, TextInput, InputProps } from './Themed';
import { Input } from '@rneui/themed';
import { InputProps as RNEInputProps } from '@rneui/themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function CenturyGothicText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'CenturyGothic' }]} />;
}

export function CenturyGothicInput(props: InputProps) {
  return <TextInput {...props} style={[props.style, { fontFamily: 'CenturyGothic' }]} />;
}

interface CenturyGothicRNEInputProps extends RNEInputProps {
  inputStyle?: any;
}

export function CenturyGothicRNEInput(props: CenturyGothicRNEInputProps) {
  return (
    <Input {...props} inputContainerStyle={{ borderBottomWidth: 0, marginTop: '2%'}} inputStyle={[props.inputStyle, { fontFamily: 'CenturyGothic' }]} />
  );
}

export function CenturyGothicBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'CenturyGothicBold' }]} />;
}

export function CenturyGothicItalicText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'CenturyGothicItalic' }]} />;
}

export function CenturyGothicBoldItalicText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'CenturyGothicBoldItalic' }]} />;
}

export function GeorgiaText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Georgia' }]} />;
}

export function GeorgiaBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'GeorgiaBold' }]} />;
}

export function GeorgiaItalicText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'GeorgiaItalic' }]} />;
}

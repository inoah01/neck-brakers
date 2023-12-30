// WrapperComponent.tsx
import { AuthProvider } from '@contexts/AuthContext';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

interface WrapperComponentProps {
    children: React.ReactNode;
}

export default function WrapperComponent({ children: children }: WrapperComponentProps) {
 const colorScheme = useColorScheme();

 return (
   <AuthProvider>
     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       {children}
     </ThemeProvider>
   </AuthProvider>
 );
}

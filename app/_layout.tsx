import 'react-native-url-polyfill/auto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Redirect, Slot } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { AuthProvider, useAuth } from '@contexts/AuthContext';
import { useRouter, usePathname } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    CenturyGothic: require('../assets/fonts/century-gothic/CenturyGothicPaneuropeanRegular.ttf'),
    CenturyGothicBold: require('../assets/fonts/century-gothic/CenturyGothicPaneuropeanBold.ttf'),
    CenturyGothicItalic: require('../assets/fonts/century-gothic/CenturyGothicPaneuropeanItalic.ttf'),
    CenturyGothicBoldItalic: require('../assets/fonts/century-gothic/CenturyGothicPaneuropeanBoldItalic.ttf'),
    Georgia: require('../assets/fonts/georgia/georgia.ttf'),
    GeorgiaBold: require('../assets/fonts/georgia/georgiab.ttf'),
    GeorgiaItalic: require('../assets/fonts/georgia/georgiai.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
    );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { session } = useAuth();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (!session && pathName !== '/(auth)') {
      router.push('/(auth)')
    } else if (session && pathName !== '/(main)') {
      router.push('/(main)')
    }
  }, [session]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Slot />
    </ThemeProvider>
  );
}

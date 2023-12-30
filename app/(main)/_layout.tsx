import { Redirect, Stack } from 'expo-router';
import { GeorgiaBoldText } from '@components/StyledText';

import { useAuth } from '@contexts/AuthContext';

export default function HomeLayout() {
  const { session, loading } = useAuth();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (loading) {
    return <GeorgiaBoldText style={{fontSize: 24, color: 'black'}}>Loading . . .</GeorgiaBoldText>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(auth)/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}

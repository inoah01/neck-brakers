import { Text, View } from 'react-native';
import { useAuth } from '@contexts/AuthContext';

export default function Index() {
  const { handleSignOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          handleSignOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}

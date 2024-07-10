import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
function Layout({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      {children}
    </View>);
}
export default Layout
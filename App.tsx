import { useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SystemUI from 'expo-system-ui';
import { RootNavigator } from './src/navigation/RootNavigator';
import { colors } from './src/constants/colors';
import './global.css';

export default function App() {
  useEffect(() => {
    void SystemUI.setBackgroundColorAsync(colors.canvas);
  }, []);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: colors.canvas }}>
        <StatusBar style="light" hidden={true} />
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
}

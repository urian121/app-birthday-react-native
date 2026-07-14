import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../../components/ui/Screen';
import { TextField } from '../../components/ui/TextField';
import { Button } from '../../components/ui/Button';
import { BrandLogo } from '../../components/ui/BrandLogo';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 420 });
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Screen scroll>
      <Animated.View style={animatedStyle} className="min-h-full flex-1 justify-between">
        <BrandLogo className="mb-4 mt-1" />

        <View className="flex-1 justify-center gap-8 py-4">
          <Animated.View
            entering={FadeInDown.delay(80).duration(450)}
            className="gap-4"
          >
            <TextField
              variant="auth"
              placeholder="Correo electrónico"
              keyboardType="email-address"
            />
            <TextField
              variant="auth"
              placeholder="Contraseña"
              secureTextEntry
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(160).duration(450)}>
            <Button
              label="Entrar"
              icon="log-in-outline"
              onPress={() => navigation.replace('Main')}
            />
          </Animated.View>
        </View>

        <Animated.View entering={FadeInDown.delay(220).duration(450)} className="pb-2">
          <Button
            label="Registrarse"
            variant="link"
            icon="person-add-outline"
            onPress={() => navigation.navigate('Register')}
          />
        </Animated.View>
      </Animated.View>
    </Screen>
  );
}

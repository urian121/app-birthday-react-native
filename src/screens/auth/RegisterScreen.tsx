import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../../components/ui/Screen';
import { TextField } from '../../components/ui/TextField';
import { Button } from '../../components/ui/Button';
import { BrandLogo } from '../../components/ui/BrandLogo';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export function RegisterScreen({ navigation }: Props) {
  return (
    <Screen scroll>
      <View className="min-h-full flex-1 justify-between">
        <BrandLogo className="mb-4 mt-1" />

        <View className="flex-1 justify-center gap-8 py-4">
          <Animated.View
            entering={FadeInDown.delay(80).duration(450)}
            className="gap-4"
          >
            <TextField variant="auth" placeholder="Nombre" />
            <TextField
              variant="auth"
              placeholder="Correo electrónico"
              keyboardType="email-address"
            />
            <TextField variant="auth" placeholder="Contraseña" secureTextEntry />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(160).duration(450)}>
            <Button
              label="Crear cuenta"
              icon="person-add-outline"
              onPress={() => navigation.replace('Main')}
            />
          </Animated.View>
        </View>

        <Animated.View entering={FadeInDown.delay(220).duration(450)} className="pb-2">
          <Button
            label="Entrar"
            variant="link"
            icon="log-in-outline"
            onPress={() => navigation.navigate('Login')}
          />
        </Animated.View>
      </View>
    </Screen>
  );
}

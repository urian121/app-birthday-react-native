import { Pressable, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Ionicons from '@react-native-vector-icons/ionicons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../../components/ui/Screen';
import { TextField } from '../../components/ui/TextField';
import { Button } from '../../components/ui/Button';
import { BrandLogo } from '../../components/ui/BrandLogo';
import { colors } from '../../constants/colors';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export function RegisterScreen({ navigation }: Props) {
  return (
    <Screen scroll>
      <View className="min-h-full flex-1 justify-between">
        <View>
          <Pressable
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Volver"
            className="h-11 w-11 items-center justify-center rounded-full bg-surface active:opacity-70"
          >
            <Ionicons name="arrow-back" size={20} color={colors.text} />
          </Pressable>

          <BrandLogo className="mb-4 mt-16" />
        </View>

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

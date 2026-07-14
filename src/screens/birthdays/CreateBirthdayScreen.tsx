import { Pressable, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../../components/ui/Screen';
import { TextField } from '../../components/ui/TextField';
import { Button } from '../../components/ui/Button';
import { colors } from '../../constants/colors';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateBirthday'>;

export function CreateBirthdayScreen({ navigation }: Props) {
  return (
    <Screen scroll>
      <View className="py-4">
        <Animated.View
          entering={FadeInDown.duration(400)}
          className="mb-8 flex-row items-center gap-3"
        >
          <Pressable
            onPress={() => navigation.goBack()}
            className="h-11 w-11 items-center justify-center rounded-full bg-surface active:opacity-70"
          >
            <Ionicons name="arrow-back" size={20} color={colors.text} />
          </Pressable>
          <View className="flex-1 gap-1">
            <Text className="text-2xl font-semibold text-text">Nuevo cumpleaños</Text>
            <Text className="text-sm text-text-muted">
              Añade a alguien para no olvidar su día.
            </Text>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(80).duration(400)} className="mb-6 items-center">
          <Pressable className="h-28 w-28 items-center justify-center rounded-full bg-accent-soft active:opacity-80">
            <Ionicons name="camera-outline" size={28} color={colors.accent} />
            <Text className="mt-2 text-xs font-medium text-accent">Foto opcional</Text>
          </Pressable>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(140).duration(400)} className="gap-4">
          <TextField label="Nombre" placeholder="Nombre completo" />
          <TextField
            label="Fecha de nacimiento"
            placeholder="AAAA-MM-DD"
            keyboardType="numeric"
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(400)} className="mt-10 gap-3">
          <Button
            label="Guardar"
            icon="checkmark-outline"
            onPress={() => navigation.goBack()}
          />
          <Button
            label="Cancelar"
            variant="ghost"
            icon="close-outline"
            onPress={() => navigation.goBack()}
          />
        </Animated.View>
      </View>
    </Screen>
  );
}

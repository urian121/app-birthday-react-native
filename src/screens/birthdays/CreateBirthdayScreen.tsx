import { Pressable, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Screen } from '../../components/ui/Screen';
import { FadeInOnFocus } from '../../components/ui/FadeInOnFocus';
import { UserAvatar } from '../../components/ui/UserAvatar';
import { TextField } from '../../components/ui/TextField';
import { Button } from '../../components/ui/Button';
import { colors } from '../../constants/colors';
import type { MainTabParamList } from '../../navigation/types';

type Props = BottomTabScreenProps<MainTabParamList, 'Add'>;

export function CreateBirthdayScreen({ navigation }: Props) {
  const goToBirthdays = () => navigation.navigate('Birthdays');

  return (
    <Screen scroll padded={false} edges={['top', 'left', 'right']}>
      <FadeInOnFocus className="px-5 pb-3 pt-2">
        <View className="mb-5 flex-row items-center justify-end">
          <UserAvatar />
        </View>

        <View className="mb-8 flex-row items-center gap-3">
          <Pressable
            onPress={goToBirthdays}
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
        </View>

        <View className="mb-6 items-center">
          <Pressable className="h-28 w-28 items-center justify-center rounded-full bg-accent-soft active:opacity-80">
            <Ionicons name="camera-outline" size={28} color={colors.accent} />
            <Text className="mt-2 text-xs font-medium text-accent">Foto opcional</Text>
          </Pressable>
        </View>

        <View className="gap-4">
          <TextField label="Nombre" placeholder="Nombre completo" />
          <TextField
            label="Fecha de nacimiento"
            placeholder="AAAA-MM-DD"
            keyboardType="numeric"
          />
        </View>

        <View className="mt-10 gap-3">
          <Button
            label="Guardar"
            icon="checkmark-outline"
            onPress={goToBirthdays}
          />
          <Button
            label="Cancelar"
            variant="ghost"
            icon="close-outline"
            onPress={goToBirthdays}
          />
        </View>
      </FadeInOnFocus>
    </Screen>
  );
}

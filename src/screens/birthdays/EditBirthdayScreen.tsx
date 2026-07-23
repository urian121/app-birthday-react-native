import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Ionicons from '@react-native-vector-icons/ionicons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../../components/ui/Screen';
import { UserAvatar } from '../../components/ui/UserAvatar';
import { ConfirmModal } from '../../components/ui/ConfirmModal';
import { TextField } from '../../components/ui/TextField';
import { Button } from '../../components/ui/Button';
import { MOCK_BIRTHDAYS } from '../../constants/mockBirthdays';
import { colors } from '../../constants/colors';
import type { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'EditBirthday'>;

export function EditBirthdayScreen({ navigation, route }: Props) {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const birthday =
    MOCK_BIRTHDAYS.find((item) => item.id === route.params.id) ?? MOCK_BIRTHDAYS[0];
  const personName = route.params.name ?? birthday.name;

  const handleConfirmDelete = () => {
    setConfirmDeleteVisible(false);
    navigation.goBack();
  };

  return (
    <Screen scroll padded={false}>
      <View className="px-5 pb-8 pt-2">
        <View className="mb-5 flex-row items-center justify-end">
          <UserAvatar />
        </View>

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
            <Text className="text-2xl font-semibold text-text">Editar cumpleaños</Text>
            <Text className="text-sm text-text-muted">
              Actualiza los datos de {personName}.
            </Text>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(80).duration(400)} className="mb-6 items-center">
          <Pressable className="h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-accent-soft active:opacity-80">
            {birthday.photoUri ? (
              <Image source={{ uri: birthday.photoUri }} className="h-full w-full" />
            ) : (
              <>
                <Text className="text-2xl font-semibold text-accent">
                  {birthday.name
                    .split(' ')
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')
                    .toUpperCase()}
                </Text>
                <Text className="mt-1 text-xs font-medium text-accent">Cambiar foto</Text>
              </>
            )}
          </Pressable>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(140).duration(400)} className="gap-4">
          <TextField label="Nombre" value={birthday.name} placeholder="Nombre completo" />
          <TextField
            label="Fecha de nacimiento"
            value={birthday.birthDate}
            placeholder="AAAA-MM-DD"
            keyboardType="numeric"
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(400)} className="mt-10 gap-3">
          <Button
            label="Guardar cambios"
            icon="checkmark-outline"
            onPress={() => navigation.goBack()}
          />
          <Button
            label="Eliminar persona"
            icon="trash-outline"
            onPress={() => setConfirmDeleteVisible(true)}
          />
          <Button
            label="Cancelar"
            variant="ghost"
            icon="close-outline"
            onPress={() => navigation.goBack()}
          />
        </Animated.View>
      </View>

      <ConfirmModal
        visible={confirmDeleteVisible}
        title="¿Eliminar persona?"
        message={`Se eliminará a ${personName} de tu lista. Esta acción no se puede deshacer.`}
        confirmLabel="Eliminar"
        cancelLabel="Cancelar"
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDeleteVisible(false)}
      />
    </Screen>
  );
}

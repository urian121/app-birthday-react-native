import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { Birthday } from '../../types/birthday';
import { colors } from '../../constants/colors';

type BirthdayCardProps = {
  birthday: Birthday;
  onEdit?: () => void;
  onDelete?: () => void;
};

function formatBirthDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
  });
}

export function BirthdayCard({ birthday, onEdit, onDelete }: BirthdayCardProps) {
  const initials = birthday.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <View
      className="rounded-card bg-surface p-4"
    >
      <View className="flex-row items-center gap-4">
        <View
          className={`h-14 w-14 items-center justify-center rounded-full ${
            birthday.isToday ? 'bg-today-soft' : 'bg-accent-soft'
          }`}
        >
          <Text
            className={`text-base font-semibold ${
              birthday.isToday ? 'text-today' : 'text-accent'
            }`}
          >
            {initials}
          </Text>
        </View>

        <View className="flex-1">
          <Text className="text-lg font-semibold text-text">{birthday.name}</Text>
          <Text className="mt-0.5 text-sm text-text-muted">
            {formatBirthDate(birthday.birthDate)} · Cumple {birthday.turningAge}
          </Text>
          <Text
            className={`mt-2 text-sm font-medium ${
              birthday.isToday ? 'text-today' : 'text-accent'
            }`}
          >
            {birthday.isToday
              ? 'Cumple hoy'
              : `Faltan ${birthday.daysUntil} ${birthday.daysUntil === 1 ? 'día' : 'días'}`}
          </Text>
        </View>
      </View>

      <View className="mt-4 flex-row gap-2">
        <Pressable
          onPress={onEdit}
          className="flex-1 flex-row items-center justify-center gap-2 rounded-pill bg-button py-3 active:opacity-80"
        >
          <Ionicons name="create-outline" size={16} color={colors.accent} />
          <Text className="text-sm font-medium text-accent">Editar</Text>
        </Pressable>
        <Pressable
          onPress={onDelete}
          className="flex-1 flex-row items-center justify-center gap-2 rounded-pill bg-button py-3 active:opacity-80"
        >
          <Ionicons name="trash-outline" size={16} color={colors.accent} />
          <Text className="text-sm font-medium text-accent">Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
}

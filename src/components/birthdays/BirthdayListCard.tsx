import { Image, Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import type { BirthdayListCardProps } from '../../types/birthday';
import { colors } from '../../constants/colors';
import {
  formatBirthdayWeekday,
  formatDaysLabel,
} from '../../utils/birthdayFormat';

export function BirthdayListCard({ birthday, onPress }: BirthdayListCardProps) {
  const daysLabel = formatDaysLabel(birthday.daysUntil, birthday.isToday);

  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center rounded-card bg-surface px-4 py-3.5 active:opacity-90"
    >
      <View className="mr-3 h-14 w-14 overflow-hidden rounded-full bg-field-dark">
        {birthday.photoUri ? (
          <Image source={{ uri: birthday.photoUri }} className="h-full w-full" />
        ) : (
          <View className="h-full w-full items-center justify-center">
            <Text className="text-base font-semibold text-accent">
              {birthday.name
                .split(' ')
                .slice(0, 2)
                .map((part) => part[0])
                .join('')
                .toUpperCase()}
            </Text>
          </View>
        )}
      </View>

      <View className="flex-1 pr-3">
        <Text className="text-[17px] font-semibold text-text" numberOfLines={1}>
          {birthday.name}
        </Text>
        <Text className="mt-1 text-sm text-text-muted">
          {formatBirthdayWeekday(birthday.birthDate)}
        </Text>
      </View>

      <View className="min-w-[72px] items-end">
        {birthday.isToday ? (
          <View className="items-end gap-0.5">
            <MaterialCommunityIcons name="crown" size={18} color={colors.accent} />
            <Text className="text-sm font-semibold text-accent">{daysLabel}</Text>
          </View>
        ) : (
          <Text className="text-sm font-medium text-text">{daysLabel}</Text>
        )}
      </View>
    </Pressable>
  );
}

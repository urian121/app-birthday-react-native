import { Text, View } from 'react-native';
import type { MonthCardProps } from '../../types/birthday';
import { formatMonthCount } from '../../utils/birthdayFormat';

export function MonthCard({ group }: MonthCardProps) {
  return (
    <View className="rounded-card bg-surface px-5 py-4">
      <View className="mb-4 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2.5">
          <Text className="text-xl">{group.emoji}</Text>
          <Text className="text-lg font-semibold text-text">{group.label}</Text>
        </View>
        <Text className="text-base font-medium text-text-muted">
          {formatMonthCount(group.count)}
        </Text>
      </View>

      <View className="gap-3">
        {group.items.map((item) => (
          <View key={item.id} className="flex-row items-center gap-3">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-accent-soft">
              <Text className="text-sm font-semibold text-accent">{item.day}</Text>
            </View>
            <Text className="flex-1 text-[15px] font-medium text-text" numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

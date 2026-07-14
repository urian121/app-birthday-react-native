import { Text, View } from 'react-native';
import type { MonthGroup } from '../../types/birthday';
import { formatMonthCount } from '../../utils/birthdayFormat';

type MonthCardProps = {
  group: MonthGroup;
};

export function MonthCard({ group }: MonthCardProps) {
  return (
    <View className="rounded-card bg-surface px-5 py-4">
      <View className="mb-3 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2.5">
          <Text className="text-xl">{group.emoji}</Text>
          <Text className="text-lg font-semibold text-text">{group.label}</Text>
        </View>
        <Text className="text-base font-medium text-text-muted">
          {formatMonthCount(group.count)}
        </Text>
      </View>

      <View className="gap-2.5">
        {group.items.map((item) => (
          <Text key={item.id} className="text-[15px] text-text-muted">
            • {item.day} — {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
}

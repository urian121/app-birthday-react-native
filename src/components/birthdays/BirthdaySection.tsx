import { Text, View } from 'react-native';
import type { BirthdaySectionProps } from '../../types/birthday';

export function BirthdaySection({ title, subtitle, children }: BirthdaySectionProps) {
  return (
    <View className="gap-4">
      <View className="gap-1">
        <Text className="text-xl font-semibold text-text">{title}</Text>
        {subtitle ? <Text className="text-sm text-text-muted">{subtitle}</Text> : null}
      </View>
      <View className="gap-3">{children}</View>
    </View>
  );
}

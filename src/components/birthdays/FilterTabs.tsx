import { Pressable, Text, View } from 'react-native';
import type { FilterPillProps, FilterTabsProps } from '../../types/birthday';

export function FilterPill({ label, active = false, onPress }: FilterPillProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-pill px-5 py-2.5 active:opacity-85 ${
        active ? 'bg-accent' : 'bg-transparent'
      }`}
    >
      <Text
        className={`text-[15px] font-semibold ${
          active ? 'text-text-onAccent' : 'text-text'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function FilterTabs({ value, onChange }: FilterTabsProps) {
  return (
    <View className="flex-row items-center gap-2">
      <FilterPill
        label="Próximos"
        active={value === 'upcoming'}
        onPress={() => onChange('upcoming')}
      />
      <FilterPill
        label="Todos"
        active={value === 'all'}
        onPress={() => onChange('all')}
      />
    </View>
  );
}

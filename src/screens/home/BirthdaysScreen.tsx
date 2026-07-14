import { useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Screen } from '../../components/ui/Screen';
import { UserAvatar } from '../../components/ui/UserAvatar';
import { SearchField } from '../../components/ui/SearchField';
import { FadeInOnFocus } from '../../components/ui/FadeInOnFocus';
import { FilterTabs } from '../../components/birthdays/FilterTabs';
import { BirthdayListCard } from '../../components/birthdays/BirthdayListCard';
import { MOCK_BIRTHDAYS } from '../../constants/mockBirthdays';
import type { MainTabParamList, RootStackParamList } from '../../navigation/types';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Birthdays'>,
  NativeStackScreenProps<RootStackParamList>
>;

export function BirthdaysScreen({ navigation }: Props) {
  const [filter, setFilter] = useState<'upcoming' | 'all'>('upcoming');
  const [query, setQuery] = useState('');

  const filtered = MOCK_BIRTHDAYS.filter((item) => {
    const matchesQuery = item.name
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesFilter = filter === 'all' ? true : item.daysUntil <= 60;
    return matchesQuery && matchesFilter;
  });

  return (
    <Screen scroll padded={false}>
      <FadeInOnFocus className="px-5 pb-28 pt-2">
        <View className="mb-5 flex-row items-center gap-3">
          <View className="flex-1">
            <SearchField value={query} onChangeText={setQuery} />
          </View>
          <UserAvatar />
        </View>

        <View className="mb-5">
          <FilterTabs value={filter} onChange={setFilter} />
        </View>

        <View className="gap-3">
          {filtered.map((birthday) => (
            <BirthdayListCard
              key={birthday.id}
              birthday={birthday}
              onPress={() =>
                navigation.navigate('EditBirthday', {
                  id: birthday.id,
                  name: birthday.name,
                })
              }
            />
          ))}
        </View>
      </FadeInOnFocus>
    </Screen>
  );
}

import { useState } from 'react';
import { ScrollView, View } from 'react-native';
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
import type { BirthdayFilter } from '../../types/birthday';
import type { MainTabParamList, RootStackParamList } from '../../navigation/types';
import { hasBirthdayPassedThisYear } from '../../utils/birthdayFormat';

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Birthdays'>,
  NativeStackScreenProps<RootStackParamList>
>;

function matchesBirthdayFilter(
  filter: BirthdayFilter,
  birthDate: string,
  daysUntil: number,
) {
  const passed = hasBirthdayPassedThisYear(birthDate);

  if (filter === 'all') return true;
  if (filter === 'past') return passed;
  return !passed && daysUntil <= 60;
}

export function BirthdaysScreen({ navigation }: Props) {
  const [filter, setFilter] = useState<BirthdayFilter>('upcoming');
  const [query, setQuery] = useState('');

  const filtered = MOCK_BIRTHDAYS.filter((item) => {
    const matchesQuery = item.name
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesFilter = matchesBirthdayFilter(
      filter,
      item.birthDate,
      item.daysUntil,
    );
    return matchesQuery && matchesFilter;
  });

  return (
    <Screen padded={false} edges={['top', 'left', 'right']}>
      <FadeInOnFocus className="flex-1 px-5 pt-2">
        <View className="bg-canvas pb-4">
          <View className="mb-5 flex-row items-center gap-3">
            <View className="flex-1">
              <SearchField value={query} onChangeText={setQuery} />
            </View>
            <UserAvatar />
          </View>

          <FilterTabs value={filter} onChange={setFilter} />
        </View>

        <ScrollView
          className="flex-1"
          contentContainerClassName="grow gap-3 pb-3"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
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
        </ScrollView>
      </FadeInOnFocus>
    </Screen>
  );
}

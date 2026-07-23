import { View } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Screen } from '../../components/ui/Screen';
import { UserAvatar } from '../../components/ui/UserAvatar';
import { FadeInOnFocus } from '../../components/ui/FadeInOnFocus';
import { MonthCard } from '../../components/birthdays/MonthCard';
import { MOCK_MONTH_GROUPS } from '../../constants/mockBirthdays';
import type { MainTabParamList } from '../../navigation/types';

type Props = BottomTabScreenProps<MainTabParamList, 'Months'>;

export function MonthsScreen(_props: Props) {
  return (
    <Screen scroll padded={false} edges={['top', 'left', 'right']}>
      <FadeInOnFocus className="px-5 pb-3 pt-2">
        <View className="mb-5 flex-row items-center justify-end">
          <UserAvatar />
        </View>

        <View className="gap-4">
          {MOCK_MONTH_GROUPS.map((group) => (
            <MonthCard key={group.month} group={group} />
          ))}
        </View>
      </FadeInOnFocus>
    </Screen>
  );
}

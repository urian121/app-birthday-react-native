import { Pressable, Text, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BirthdaysScreen } from '../screens/home/BirthdaysScreen';
import { MonthsScreen } from '../screens/home/MonthsScreen';
import { CreateBirthdayScreen } from '../screens/birthdays/CreateBirthdayScreen';
import { colors } from '../constants/colors';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function AddTabButton({ onPress, accessibilityState }: BottomTabBarButtonProps) {
  const focused = accessibilityState?.selected ?? false;
  const tint = focused ? colors.accent : colors.text;

  return (
    <Pressable
      onPress={onPress}
      className="top-[-10px] items-center justify-center active:opacity-85"
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      accessibilityLabel="Agregar cumpleaños"
    >
      <View
        className="h-14 w-14 items-center justify-center rounded-full border-[1.5px] bg-canvas"
        style={{ borderColor: tint }}
      >
        <Ionicons name="add" size={30} color={tint} />
      </View>
    </Pressable>
  );
}

export function MainTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopWidth: 0,
          height: 64 + Math.max(insets.bottom, 8),
          paddingTop: 8,
          paddingBottom: Math.max(insets.bottom, 10),
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Birthdays"
        component={BirthdaysScreen}
        options={{
          tabBarLabel: 'Cumpleaños',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'gift' : 'gift-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={CreateBirthdayScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => null,
          tabBarButton: (props) => <AddTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Months"
        component={MonthsScreen}
        options={{
          tabBarLabel: 'Meses',
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <MaterialCommunityIcons
                name={focused ? 'calendar-month' : 'calendar-month-outline'}
                size={22}
                color={color}
              />
              {!focused ? (
                <Text className="absolute -right-2 -top-1 text-[9px] font-bold text-text-muted">
                  12
                </Text>
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

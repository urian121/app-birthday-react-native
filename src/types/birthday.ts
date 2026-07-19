import type { ReactNode, ComponentProps } from 'react';
import type Ionicons from '@react-native-vector-icons/ionicons';

export type Birthday = {
  id: string;
  name: string;
  birthDate: string;
  photoUri?: string;
  daysUntil: number;
  turningAge: number;
  isToday: boolean;
};

export type MonthGroup = {
  month: number;
  label: string;
  emoji: string;
  count: number;
  items: Array<{
    id: string;
    day: number;
    name: string;
  }>;
};

export type Colors = {
  canvas: string;
  surface: string;
  tabBar: string;
  field: string;
  fieldDark: string;
  fieldPlaceholder: string;
  text: string;
  textMuted: string;
  textSoft: string;
  textOnAccent: string;
  button: string;
  accent: string;
  accentSoft: string;
  today: string;
};

export type BirthdayCardProps = {
  birthday: Birthday;
  onEdit?: () => void;
  onDelete?: () => void;
};

export type BirthdayListCardProps = {
  birthday: Birthday;
  onPress?: () => void;
};

export type BirthdaySectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export type BirthdayFilter = 'upcoming' | 'all';

export type FilterPillProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export type FilterTabsProps = {
  value: BirthdayFilter;
  onChange: (value: BirthdayFilter) => void;
};

export type MonthCardProps = {
  group: MonthGroup;
};

export type BrandLogoProps = {
  className?: string;
};

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';

export type ButtonIconName = ComponentProps<typeof Ionicons>['name'];

export type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  icon?: ButtonIconName;
  className?: string;
};

export type FadeInOnFocusProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

export type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  className?: string;
};

export type SearchFieldProps = {
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
};

export type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  onChangeText?: (text: string) => void;
  className?: string;
  variant?: 'default' | 'auth';
};

export type UserAvatarProps = {
  size?: number;
  onPress?: () => void;
};

import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  icon?: keyof typeof Ionicons.glyphMap;
  className?: string;
};

const variantStyles: Record<
  ButtonVariant,
  { container: string; label: string; icon: string }
> = {
  primary: {
    container: 'h-14 rounded-pill bg-button',
    label: 'text-accent',
    icon: colors.accent,
  },
  secondary: {
    container: 'h-14 rounded-pill bg-button',
    label: 'text-text-muted',
    icon: colors.textMuted,
  },
  ghost: {
    container: 'h-14 rounded-pill bg-transparent',
    label: 'text-text-muted',
    icon: colors.textMuted,
  },
  link: {
    container: 'h-auto bg-transparent py-3',
    label: 'text-text font-medium',
    icon: colors.text,
  },
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  icon,
  className = '',
}: ButtonProps) {
  const styles = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center justify-center gap-2 active:opacity-80 ${styles.container} ${className}`}
    >
      {icon ? <Ionicons name={icon} size={18} color={styles.icon} /> : null}
      <Text className={`text-base font-semibold ${styles.label}`}>{label}</Text>
    </Pressable>
  );
}

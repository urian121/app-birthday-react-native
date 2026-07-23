import { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import Ionicons from '@react-native-vector-icons/ionicons';
import type { ConfirmModalProps } from '../../types/birthday';
import { Button } from './Button';
import { colors } from '../../constants/colors';

export function ConfirmModal({
  visible,
  title,
  message,
  confirmLabel = 'Eliminar',
  cancelLabel = 'Cancelar',
  confirmIcon = 'trash-outline',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const [mounted, setMounted] = useState(visible);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      progress.value = withTiming(1, {
        duration: 240,
        easing: Easing.out(Easing.cubic),
      });
      return;
    }

    if (!mounted) return;

    progress.value = withTiming(
      0,
      { duration: 180, easing: Easing.in(Easing.cubic) },
      (finished) => {
        if (finished) {
          scheduleOnRN(setMounted, false);
        }
      },
    );
  }, [visible, mounted, progress]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  const cardStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      { scale: 0.92 + progress.value * 0.08 },
      { translateY: (1 - progress.value) * 16 },
    ],
  }));

  if (!mounted) return null;

  return (
    <Modal
      transparent
      visible={mounted}
      animationType="none"
      statusBarTranslucent
      onRequestClose={onCancel}
    >
      <View className="flex-1 items-center justify-center px-6">
        <Animated.View
          pointerEvents="none"
          style={backdropStyle}
          className="absolute inset-0 bg-black/65"
        />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cerrar"
          onPress={onCancel}
          className="absolute inset-0"
        />

        <Animated.View
          style={cardStyle}
          className="w-full max-w-[360px] rounded-[28px] bg-surface px-5 pb-5 pt-6"
        >
          <View className="mb-5 items-center">
            <View className="mb-4 h-14 w-14 items-center justify-center rounded-full bg-accent-soft">
              <Ionicons name="trash-outline" size={26} color={colors.accent} />
            </View>
            <Text className="text-center text-xl font-semibold text-text">{title}</Text>
            <Text className="mt-2 text-center text-sm leading-5 text-text-muted">
              {message}
            </Text>
          </View>

          <View className="gap-2">
            <Button
              label={confirmLabel}
              icon={confirmIcon}
              onPress={onConfirm}
            />
            <Button
              label={cancelLabel}
              variant="ghost"
              icon="close-outline"
              onPress={onCancel}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

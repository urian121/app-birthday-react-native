import { ReactNode, useCallback } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

type FadeInOnFocusProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
};

export function FadeInOnFocus({
  children,
  className = '',
  duration = 280,
}: FadeInOnFocusProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(8);

  useFocusEffect(
    useCallback(() => {
      opacity.value = 0;
      translateY.value = 8;
      opacity.value = withTiming(1, { duration });
      translateY.value = withTiming(0, { duration });

      return () => {
        opacity.value = 0;
        translateY.value = 8;
      };
    }, [duration, opacity, translateY]),
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={animatedStyle} className={className}>
      {children}
    </Animated.View>
  );
}

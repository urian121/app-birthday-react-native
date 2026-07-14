import { Image } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import type { BrandLogoProps } from '../../types/birthday';

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <Animated.View
      entering={FadeInDown.duration(450)}
      className={`items-center ${className}`}
    >
      <Image
        source={require('../../../assets/logo.png')}
        className="h-64 w-80"
        resizeMode="contain"
      />
    </Animated.View>
  );
}

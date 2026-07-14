import { Image, Pressable, View } from 'react-native';
import { MOCK_USER } from '../../constants/mockBirthdays';

type UserAvatarProps = {
  size?: number;
  onPress?: () => void;
};

export function UserAvatar({ size = 40, onPress }: UserAvatarProps) {
  return (
    <Pressable onPress={onPress} className="active:opacity-80">
      <View
        className="overflow-hidden rounded-full border-2 border-accent"
        style={{ width: size, height: size }}
      >
        <Image
          source={{ uri: MOCK_USER.photoUri }}
          style={{ width: size, height: size }}
        />
      </View>
    </Pressable>
  );
}

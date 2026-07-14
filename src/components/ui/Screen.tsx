import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ScreenProps } from '../../types/birthday';
import { colors } from '../../constants/colors';

export function Screen({
  children,
  scroll = false,
  padded = true,
  className = '',
}: ScreenProps) {
  const contentClass = `${padded ? 'px-6' : ''} ${className}`.trim();

  return (
    <View className="flex-1 bg-canvas" style={{ backgroundColor: colors.canvas }}>
      <SafeAreaView
        className="flex-1 bg-canvas"
        style={{ backgroundColor: colors.canvas }}
        edges={['top', 'left', 'right', 'bottom']}
      >
        {scroll ? (
          <ScrollView
            className="flex-1"
            contentContainerClassName={`grow pb-6 ${contentClass}`}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.canvas }}
          >
            {children}
          </ScrollView>
        ) : (
          <View
            className={`flex-1 bg-canvas ${contentClass}`}
            style={{ backgroundColor: colors.canvas }}
          >
            {children}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

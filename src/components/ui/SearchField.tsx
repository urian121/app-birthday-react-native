import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { SearchFieldProps } from '../../types/birthday';
import { colors } from '../../constants/colors';

export function SearchField({
  value,
  placeholder = 'Buscar cumpleaños...',
  onChangeText,
}: SearchFieldProps) {
  return (
    <View className="h-12 flex-row items-center rounded-pill bg-field-dark px-4">
      <Ionicons name="search" size={18} color={colors.textMuted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.fieldPlaceholder}
        className="ml-3 flex-1 text-[15px] text-text"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

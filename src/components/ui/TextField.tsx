import { Text, TextInput, View } from 'react-native';
import { colors } from '../../constants/colors';

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  onChangeText?: (text: string) => void;
  className?: string;
  /** Estilo de auth: pill, sin label, placeholder centrado */
  variant?: 'default' | 'auth';
};

export function TextField({
  label,
  placeholder,
  value,
  secureTextEntry,
  keyboardType = 'default',
  onChangeText,
  className = '',
  variant = 'default',
}: TextFieldProps) {
  const isAuth = variant === 'auth';

  return (
    <View className={`gap-2 ${className}`}>
      {label && !isAuth ? (
        <Text className="text-sm font-medium text-text-muted">{label}</Text>
      ) : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.fieldPlaceholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        textAlign={isAuth ? 'center' : 'left'}
        className={`h-14 bg-field-dark px-4 text-base text-text ${
          isAuth ? 'rounded-pill' : 'rounded-control'
        }`}
      />
    </View>
  );
}

import React from 'react';
import {
  TextInput as NativeTextInput,
  StyleSheet,
  type TextInputProps,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 12,
    fontFamily: 'Inter',
    borderWidth: 0.5,
    borderColor: '#C5C5C5',
    borderStyle: 'solid',
  },
  placeholder: {
    color: '#848484',
  },
});

export const TextInput: React.FC<TextInputProps> = ({ style, ...props }) => {
  const inputStyles = [styles.container, style];
  return (
    <NativeTextInput
      style={inputStyles}
      placeholderTextColor={styles.placeholder.color}
      {...props}
    />
  );
};

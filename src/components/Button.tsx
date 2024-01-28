import React from 'react';
import {
  Pressable,
  type PressableProps,
  StyleSheet,
  type ViewStyle,
} from 'react-native';
import { Text } from './Text';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1877F2',
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 12,
    fontFamily: 'Inter',
  },
  disabledButton: {
    backgroundColor: '#1877F299',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
});

export const Button: React.FC<PressableProps> = ({
  style,
  children,
  disabled,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    style,
    disabled ? styles.disabledButton : null,
  ];
  return (
    <Pressable {...props} style={buttonStyles as ViewStyle}>
      <Text style={styles.title}>{children as any}</Text>
    </Pressable>
  );
};

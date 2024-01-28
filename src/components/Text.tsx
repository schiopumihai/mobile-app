import React, { type ReactNode } from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
  },
});

export const Text: React.FC<{ children: ReactNode; style?: any }> = ({
  children,
  style,
  ...props
}) => {
  const textStyles = [styles.text, style];
  return (
    <NativeText {...props} style={textStyles}>
      {children}
    </NativeText>
  );
};

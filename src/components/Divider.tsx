import React from 'react';
import { type TextProps, View, StyleSheet } from 'react-native';
import { Text } from './Text';

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {
    color: '#D3D3D3',
    paddingHorizontal: 18,
    backgroundColor: 'white',
    width: 'auto',
    position: 'absolute',
    top: -8,
  },
});

export const Divider: React.FC<TextProps> = ({ children, style, ...props }) => {
  const containerStyle = [styles.divider, style];
  return (
    <View style={containerStyle} {...props}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  logo: {
    fontFamily: 'Pacifico',
    fontSize: 32,
    marginBottom: 34,
  },
  width: {
    width: '100%',
  },

  formContainer: {
    width: '100%',
    display: 'flex',
    gap: 14,
  },

  divider: {
    width: '100%',
    marginVertical: 42,
  },
});

export const LogIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Mobile App</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Phone number, email or username"
          style={styles.width}
        />
        <TextInput
          placeholder="Password"
          style={styles.width}
          secureTextEntry
        />
        <Button
          style={styles.width}
          onPress={() => {
            console.log('Pressed');
          }}
        >
          Sign In
        </Button>
      </View>
      <Divider style={styles.divider}>OR</Divider>
      <Button style={styles.width}>Sign Up with Facebook</Button>
    </View>
  );
};

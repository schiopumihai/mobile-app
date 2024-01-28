import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogIn } from '@/features/auth/LogIn';

const Stack = createNativeStackNavigator();

export const Router: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      {
        <Stack.Screen
          name="login"
          component={LogIn}
          options={{
            headerShown: false,
          }}
        />
      }
    </Stack.Navigator>
  );
};

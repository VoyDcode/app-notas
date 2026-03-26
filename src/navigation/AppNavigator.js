import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../contexts/AuthContext';
import LoadingIndicator from '../components/LoadingIndicator';

// Auth Screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

// App Screens
import HomeScreen from '../screens/HomeScreen';
import NoteScreen from '../screens/NoteScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          // Telas de App (Usuário logado)
          <>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'Minhas Notas' }} 
            />
            <Stack.Screen 
              name="Note" 
              component={NoteScreen} 
              options={{ title: 'Nota' }} 
            />
          </>
        ) : (
          // Telas de Autenticação (Deslogado)
          <>
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="Register" 
              component={RegisterScreen} 
              options={{ title: 'Criar Conta' }} 
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

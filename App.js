import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// --- IMPORTS REALES DE TUS PANTALLAS ---
import HomeScreen from './src/screens/Home/HomeScreen';
import ChatbotScreen from './src/screens/Chatbot/ChatbotScreen';
import MyTicketsScreen from './src/screens/MyTickets/MyTicketsScreen';
import ProfileScreen from './src/screens/Profile/ProfileScreen';

// --- COMPONENTES AUXILIARES ---
const EventDetailPlaceholder = ({ route }) => {
  const { eventId } = route.params || {};
  return (
    <View style={styles.center}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>Detalle del Evento</Text>
      <Text style={{color: '#fff'}}>ID recibido: {eventId}</Text>
      <Text style={{marginTop: 10, color: 'gray'}}>Aquí iría la info del Venue, precios y mapa.</Text>
    </View>
  );
};

// --- CONFIGURACIÓN DE NAVEGACIÓN ---
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 1. Grupo de Pestañas (Menú Inferior)
function MainTabs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f0f' }} edges={['left', 'right']}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { 
            backgroundColor: '#121212', 
            borderTopColor: '#1a1a1a',
            borderTopWidth: 1.5,
            height: Platform.OS === 'ios' ? 85 : 70,
            paddingBottom: Platform.OS === 'ios' ? 25 : 12,
            paddingTop: 8,
            paddingHorizontal: 4,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 5,
          },
          tabBarActiveTintColor: '#4ADE80',
          tabBarInactiveTintColor: '#666',
          tabBarLabelStyle: {
            fontSize: 11,
            marginTop: 4,
            marginBottom: Platform.OS === 'ios' ? 0 : 4,
            fontWeight: '500',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'IA') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Mis Boletos') {
              iconName = focused ? 'ticket' : 'ticket-outline';
            } else if (route.name === 'Cuenta') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inicio' }}
        />
        <Tab.Screen 
          name="IA" 
          component={ChatbotScreen} 
          options={{ title: 'Asistente' }}
        />
        <Tab.Screen 
          name="Mis Boletos" 
          component={MyTicketsScreen} 
          options={{ title: 'Boletos' }}
        />
        <Tab.Screen 
          name="Cuenta" 
          component={ProfileScreen} 
          options={{ title: 'Perfil' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

// 2. Stack Principal (Orquestador Global)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0f0f0f' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#0f0f0f' },
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="EventDetail" 
          component={EventDetailPlaceholder} 
          options={{ title: 'Detalle del Evento' }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos globales
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f', 
  },
});
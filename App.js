import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; // Iconos bonitos para el menú

// --- MOCKUP DE TUS COMPONENTES (Para que la App no falle mientras migras los archivos reales) ---
// Cuando ya tengas tus archivos .js migrados a Native, descomenta los imports de abajo y borra esto.
const HomePage = () => <View style={styles.center}><Text>Home Screen</Text></View>;
const EventsPage = () => <View style={styles.center}><Text>Events List</Text></View>;
const ResalePage = () => <View style={styles.center}><Text>Resale Page</Text></View>;
const UserAccountPage = () => <View style={styles.center}><Text>Mi Cuenta</Text></View>;
const LoginPage = () => <View style={styles.center}><Text>Login Screen</Text></View>;
// El detalle necesita recibir parámetros (ID del evento)
const EventDetail = ({ route }) => {
  const { eventId } = route.params || {}; 
  return <View style={styles.center}><Text>Detalle del Evento ID: {eventId}</Text></View>;
};

/* IMPORTS REALES (Descomentar cuando migres cada archivo):
  import { AuthProvider, useAuth } from './context/AuthContext'; 
  import HomePage from './components/HomePage';
  import EventsPage from './components/EventsPage';
  // ... etc
*/

// Simulamos el AuthContext para este ejemplo
const AuthContext = React.createContext();
const AuthProvider = ({ children }) => <AuthContext.Provider value={{ user: null }}>{children}</AuthContext.Provider>;
const useAuth = () => React.useContext(AuthContext);

// --- CONFIGURACIÓN DE NAVEGACIÓN ---

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 1. El Grupo de Pestañas (Menú inferior)
function MainTabs() {
  const { user } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Ocultamos el header default de las tabs
        tabBarStyle: { backgroundColor: '#121212', borderTopColor: '#333' },
        tabBarActiveTintColor: '#4ADE80', // Color activo (verde neón)
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Eventos') iconName = focused ? 'calendar' : 'calendar-outline';
          else if (route.name === 'Reventa') iconName = focused ? 'cash' : 'cash-outline';
          else if (route.name === 'Cuenta') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Eventos" component={EventsPage} />
      <Tab.Screen name="Reventa" component={ResalePage} />
      {/* Lógica condicional: Si hay usuario va a Cuenta, si no a Login */}
      <Tab.Screen 
        name="Cuenta" 
        component={user ? UserAccountPage : LoginPage} 
        options={{ title: user ? 'Mi Perfil' : 'Iniciar Sesión' }}
      />
    </Tab.Navigator>
  );
}

// 2. El Stack Principal (Maneja la navegación entre pantallas que no están en el menú, como detalles)
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          {/* La pantalla principal son las Tabs */}
          <Stack.Screen 
            name="Main" 
            component={MainTabs} 
            options={{ headerShown: false }} 
          />
          
          {/* Pantallas "hijas" que se superponen al menú */}
          <Stack.Screen 
            name="EventDetail" 
            component={EventDetail} 
            options={{ title: 'Detalle del Evento' }} 
          />
          
          {/* Aquí agregarías AddEvent, HelpPage, etc. */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Cambiar a oscuro si prefieres
  },
});

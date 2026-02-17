/* =============================================================================
  NOMBRE: ProfileScreen.js
  DESCRIPCIÓN: 
    Centro de control del usuario. Gestiona la sesión y las integraciones externas.

  REQUERIMIENTOS UI:
    1. Avatar y Nombre del Usuario (Tomados de Google Auth).
    2. Sección "Integraciones":
       - Switch o Botón para conectar/desconectar Spotify.
       - Indicador de estado: "Spotify Conectado ✅".
    3. Botón de Cerrar Sesión (Logout).
    4. (Opcional) Switch para "Modo Oscuro".

  LÓGICA / INTEGRACIONES:
    - Consumir AuthContext para obtener datos del usuario google.
    - Función de Logout (limpiar SecureStore y navegar al Login).
    - Lógica de OAuth para Spotify (Redirección a navegador y vuelta).
  =============================================================================
*/
/* UBICACIÓN: src/screens/Profile/ProfileScreen.js */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // Importamos FontAwesome para el logo de Spotify
import { styles } from './ProfileScreen.styles';

const ProfileScreen = () => {
  // Estado para simular la conexión a Spotify
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);

  const toggleSpotify = () => {
    // Aquí iría la lógica real de autenticación con Spotify
    setIsSpotifyConnected(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      
      {/* 1. HEADER DEL PERFIL */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
           {/* Usamos un icono de persona por ahora */}
           <Ionicons name="person" size={60} color="#fff" />
        </View>
        <Text style={styles.name}>Itiel Sanchez</Text>
        <Text style={styles.email}>itiel@student.ambassador.com</Text>
      </View>

      {/* 2. SECCIÓN INTEGRACIONES (Botón Spotify Premium) */}
      <Text style={styles.sectionTitle}>INTEGRACIONES</Text>
      
      <TouchableOpacity 
        style={styles.spotifyCard} 
        activeOpacity={0.8}
        onPress={toggleSpotify} // Al tocar la tarjeta también cambia el switch
      >
        <View style={styles.spotifyIconContainer}>
          {/* Logo oficial de Spotify */}
          <FontAwesome5 name="spotify" size={32} color="#1DB954" />
        </View>
        
        <View style={styles.spotifyTextContainer}>
          <Text style={styles.spotifyTitle}>Conectar Spotify</Text>
          <Text style={styles.spotifySubtitle}>
            {isSpotifyConnected ? 'Sincronizado con tus gustos' : 'Para recomendaciones personalizadas'}
          </Text>
        </View>
        
        {/* Switch Estilizado */}
        <Switch 
          value={isSpotifyConnected}
          onValueChange={toggleSpotify}
          trackColor={{ false: "#333", true: "#1DB954" }} // Verde Spotify al encender
          thumbColor={isSpotifyConnected ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
      </TouchableOpacity>

      {/* 3. BOTÓN CERRAR SESIÓN (Al final) */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={22} color="#FF453A" />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProfileScreen;
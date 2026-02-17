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

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './ProfileScreen.styles';

const ProfileScreen = () => {
  const [isSpotifyConnected, setIsSpotifyConnected] = useState(false);

  return (
    <View style={styles.container}>
      {/* Avatar & Info */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
           <Ionicons name="person" size={50} color="#fff" />
        </View>
        <Text style={styles.name}>Itiel Sanchez</Text>
        <Text style={styles.email}>itiel@student.ambassador.com</Text>
      </View>

      {/* Ajustes */}
      <Text style={styles.sectionTitle}>Integraciones</Text>
      
      <View style={styles.menuItem}>
        <Ionicons name="musical-notes" size={24} color="#1DB954" />
        <Text style={styles.menuText}>Conectar Spotify</Text>
        <Switch 
          value={isSpotifyConnected}
          onValueChange={setIsSpotifyConnected}
          trackColor={{ false: "#333", true: "#1DB954" }}
          thumbColor={"#fff"}
        />
      </View>

      <Text style={styles.sectionTitle}>Cuenta</Text>
      
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="card" size={24} color="#aaa" />
        <Text style={styles.menuText}>Métodos de Pago</Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="settings" size={24} color="#aaa" />
        <Text style={styles.menuText}>Configuración</Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out" size={20} color="#FF453A" />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
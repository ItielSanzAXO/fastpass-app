/* UBICACIÓN: src/screens/Profile/ProfileScreen.styles.js */
/* UBICACIÓN: src/screens/Profile/ProfileScreen.styles.js */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // CONTENEDOR PRINCIPAL
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 20,
    // Agregamos padding extra abajo para que el contenido no choque con el TabBar
    paddingBottom: 100, 
  },

  // HEADER DEL PERFIL
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#4ADE80',
    shadowColor: '#4ADE80',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#888',
  },

  // SECCIONES
  sectionTitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
  },

  // TARJETA SPOTIFY
  spotifyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#333',
  },
  spotifyIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  spotifyTextContainer: {
    flex: 1,
  },
  spotifyTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  spotifySubtitle: {
    color: '#888',
    fontSize: 12,
  },

  // BOTÓN CERRAR SESIÓN (CORREGIDO)
  logoutButton: {
    marginTop: 'auto', // Empuja al fondo...
    marginBottom: 20, // ...pero deja 20px de espacio antes del padding del contenedor
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FF453A',
    backgroundColor: 'rgba(255, 69, 58, 0.05)', // Fondo rojo casi transparente muy elegante
  },
  logoutText: {
    color: '#FF453A',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});
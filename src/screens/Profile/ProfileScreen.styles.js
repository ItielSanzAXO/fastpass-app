import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#121212', paddingTop: 60, paddingHorizontal: 20,
  },
  // Cabecera Perfil
  profileHeader: { alignItems: 'center', marginBottom: 40 },
  avatar: {
    width: 100, height: 100, borderRadius: 50, backgroundColor: '#333',
    justifyContent: 'center', alignItems: 'center', marginBottom: 15,
    borderWidth: 2, borderColor: '#4ADE80'
  },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  email: { fontSize: 14, color: '#888' },

  // Sección
  sectionTitle: { fontSize: 14, color: '#666', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 },
  
  // Item de Lista
  menuItem: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E1E1E',
    padding: 16, borderRadius: 12, marginBottom: 10,
  },
  menuText: { flex: 1, color: '#fff', fontSize: 16, marginLeft: 15 },
  
  // Botón Logout
  logoutButton: {
    marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#FF453A'
  },
  logoutText: { color: '#FF453A', fontWeight: 'bold', marginLeft: 10 },
});
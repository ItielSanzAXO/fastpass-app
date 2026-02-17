/* UBICACIÓN: src/screens/Home/HomeScreen.styles.js */
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: { fontSize: 14, color: '#888' },
  username: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  avatarPlaceholder: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: '#333', justifyContent: 'center', alignItems: 'center',
  },
  
  // SECCIÓN CARRUSEL
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 12, marginTop: 10 },
  
  carouselCard: {
    width: width - 32, 
    height: 240,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 10,
    marginRight: 0, 
  },
  featuredImage: { width: '100%', height: '100%' },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end', padding: 16,
  },
  featuredBadge: {
    position: 'absolute', top: 12, left: 12,
    backgroundColor: '#FF0055',
    paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4,
  },
  featuredBadgeText: { fontSize: 10, fontWeight: 'bold', color: '#fff' },
  featuredTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  featuredSubtitle: { color: '#ddd', fontSize: 14 },

  // PAGINACIÓN
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },

  // Lista Eventos Normal
  eventCard: {
    flexDirection: 'row', backgroundColor: '#1E1E1E',
    borderRadius: 12, marginBottom: 16, overflow: 'hidden', height: 100,
  },
  eventImageSmall: { width: 100, height: '100%' },
  eventInfo: { flex: 1, padding: 12, justifyContent: 'space-between' },
  eventTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  eventDate: { color: '#888', fontSize: 12 },
  eventPrice: { color: '#4ADE80', fontWeight: 'bold', fontSize: 14 },
});
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#121212', paddingTop: 50, paddingHorizontal: 16,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  
  // Estilo del Boleto
  ticketContainer: {
    backgroundColor: '#1E1E1E', borderRadius: 16, marginBottom: 20, overflow: 'hidden',
  },
  ticketImage: { width: '100%', height: 120 },
  ticketContent: { padding: 16 },
  ticketTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  ticketInfo: { color: '#aaa', fontSize: 14, marginBottom: 16 },
  
  // Separador punteado
  separator: {
    height: 1, backgroundColor: '#333', marginVertical: 10, borderStyle: 'dashed', borderWidth: 1, borderColor: '#555', borderRadius: 1
  },

  // Área QR
  qrArea: { alignItems: 'center', marginVertical: 10 },
  qrPlaceholder: {
    width: 150, height: 150, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 8
  },
  qrText: { color: '#000', fontWeight: 'bold' },

  // Botón Wallet
  walletButton: {
    backgroundColor: '#000', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    paddingVertical: 12, borderRadius: 30, borderWidth: 1, borderColor: '#333', marginTop: 10
  },
  walletText: { color: '#fff', fontWeight: 'bold', marginLeft: 10 },
});
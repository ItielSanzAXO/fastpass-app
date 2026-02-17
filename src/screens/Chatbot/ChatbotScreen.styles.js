import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 12, color: '#4ADE80', marginLeft: 10 },
  
  // Lista de mensajes
  chatList: { paddingHorizontal: 16, paddingVertical: 20 },
  
  // Burbujas
  bubbleContainer: { marginBottom: 15, maxWidth: '80%', borderRadius: 16, padding: 12 },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 4,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#4ADE80', // Verde Neón
    borderTopRightRadius: 4,
  },
  textBot: { color: '#ddd', fontSize: 15, lineHeight: 22 },
  textUser: { color: '#000', fontSize: 15, fontWeight: '500' }, // Texto oscuro en fondo neón

  // Input Area
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#121212',
    color: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4ADE80',
    width: 45, height: 45,
    borderRadius: 25,
    justifyContent: 'center', alignItems: 'center',
  },
});
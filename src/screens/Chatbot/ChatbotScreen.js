/* =============================================================================
  NOMBRE: ChatbotScreen.js
  DESCRIPCIÓN: 
    Concierge de IA (Azure OpenAI) que recomienda eventos basándose en el
    estado de ánimo del usuario o su historial de Spotify.

  REQUERIMIENTOS UI:
    1. Lista de Mensajes (ScrollView/FlatList): 
       - Burbujas alineadas a la derecha (Usuario).
       - Burbujas alineadas a la izquierda (Bot - FastPass AI).
    2. Área de Input: TextInput y Botón de "Enviar".
    3. Botón "Conectar Spotify": Visible solo si el usuario no ha vinculado su cuenta.

  LÓGICA / INTEGRACIONES:
    - State para guardar el historial de la conversación (array de objetos).
    - Conexión a Azure Function: POST /api/chat 
      (Envía mensaje + Token de Spotify si existe).
    - Renderizado condicional: Mostrar "Escribiendo..." mientras Azure responde.
  =============================================================================
*/
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './ChatbotScreen.styles.js';

const ChatbotScreen = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: '1', text: '¡Hola Itiel! Soy FastPass AI. 🤖\n¿Buscas algo para este fin de semana?', sender: 'bot' }
  ]);

  const sendMessage = () => {
    if (message.trim().length === 0) return;

    // 1. Agregar mensaje del usuario
    const newMsg = { id: Date.now().toString(), text: message, sender: 'user' };
    setChatHistory(prev => [...prev, newMsg]);
    setMessage('');

    // 2. Simular respuesta del Bot (Aquí iría la llamada a Azure)
    setTimeout(() => {
      const botResponse = { 
        id: (Date.now() + 1).toString(), 
        text: '¡Entendido! Basado en tu Spotify, te recomiendo el concierto de The Killers en el Foro Sol. 🎸', 
        sender: 'bot' 
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1500);
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.bubbleContainer, 
      item.sender === 'user' ? styles.userBubble : styles.botBubble
    ]}>
      <Text style={item.sender === 'user' ? styles.textUser : styles.textBot}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>FastPass AI</Text>
        <Text style={styles.headerSubtitle}>● En línea</Text>
      </View>

      <FlatList
        data={chatHistory}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatList}
      />

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={80}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Escribe un mensaje..." 
            placeholderTextColor="#666"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatbotScreen;
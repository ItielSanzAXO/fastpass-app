/* =============================================================================
  NOMBRE: MyTicketsScreen.js
  DESCRIPCIÓN: 
    Billetera local de la App. Muestra los boletos comprados y genera el QR
    para el acceso físico.

  REQUERIMIENTOS UI:
    1. FlatList de Boletos Comprados.
    2. Tarjeta de Boleto Expandible o Modal:
       - Al tocar, muestra el Código QR en grande (Librería: react-native-qrcode-svg).
       - Muestra detalles: Asiento, Zona, Fecha.
    3. Botón "Add to Google Wallet": 
       - Botón negro oficial de Google.
       - Al hacer click, abre el Deep Link generado por Azure.

  LÓGICA / INTEGRACIONES:
    - Leer compras desde Cosmos DB filtrando por UserID.
    - Validar estado del boleto: Si status === 'USED', mostrar el QR en gris o con marca de agua.
  =============================================================================
*/
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './MyTicketsScreen.styles';
import { EVENTOS_MOCK } from '../../data/mockEvents';

const MyTicketsScreen = () => {
  // Simulamos que el usuario compró el evento 1 y 2
  const myTickets = [EVENTOS_MOCK[0]]; 

  const renderTicket = ({ item }) => (
    <View style={styles.ticketContainer}>
      {/* Imagen Header del Boleto */}
      <Image source={{ uri: item.imagen }} style={styles.ticketImage} resizeMode="cover" />
      
      <View style={styles.ticketContent}>
        <Text style={styles.ticketTitle}>{item.titulo}</Text>
        <Text style={styles.ticketInfo}>{item.fecha} • Zona General</Text>
        
        <View style={styles.separator} />

        {/* QR Code Simulado */}
        <View style={styles.qrArea}>
          <View style={styles.qrPlaceholder}>
             {/* Aquí usarás <QRCode /> de react-native-qrcode-svg */}
             <Ionicons name="qr-code" size={80} color="#000" />
          </View>
          <Text style={{color:'#666', marginTop: 5, fontSize: 10}}>Escanea en la entrada</Text>
        </View>

        {/* Google Wallet Button */}
        <TouchableOpacity style={styles.walletButton}>
          <Ionicons name="logo-google" size={18} color="#fff" />
          <Text style={styles.walletText}>Add to Google Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Boletos</Text>
      <FlatList
        data={myTickets}
        keyExtractor={item => item.id}
        renderItem={renderTicket}
      />
    </View>
  );
};

export default MyTicketsScreen;
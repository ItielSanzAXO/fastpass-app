/* =============================================================================
  NOMBRE: HomeScreen.js
  DESCRIPCIÓN: 
    Pantalla principal donde se visualiza el catálogo de eventos disponibles.
    Actualmente lee datos de prueba (mockEvents), pero migrará a Azure Cosmos DB.

  REQUERIMIENTOS UI:
    1. Header con bienvenida o logo de la App.
    2. Carousel (Opcional): Eventos destacados ("esDestacado": true).
    3. FlatList Vertical: Lista de tarjetas de eventos.
       - Cada tarjeta debe mostrar: Imagen, Título, Fecha, Lugar y Precio ("Desde $...").
    4. Interacción: Al tocar una tarjeta, navegar a 'EventDetail' pasando el ID del evento.

  LÓGICA / INTEGRACIONES:
    - Importar { EVENTOS_MOCK } de '../../data/mockEvents'.
    - (Futuro) useEffect para hacer fetch a Azure Function: GET /api/events.
    - Manejo de estado de carga (ActivityIndicator).
  =============================================================================
*/
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './HomeScreen.styles';
import { EVENTOS_MOCK } from '../../data/mockEvents';

const { width } = Dimensions.get('window');

// --- COMPONENTE CARRUSEL AUTOMÁTICO ---
const FeaturedCarousel = ({ data, navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    // Lógica del Autoplay: Cambia cada 5 segundos (5000 ms)
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      
      // Si llegamos al final, volvemos al inicio (Loop)
      if (nextIndex >= data.length) {
        nextIndex = 0;
      }

      // Mueve la lista suavemente
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, 5000); // <--- TIEMPO: 5 SEGUNDOS

    return () => clearInterval(interval); // Limpieza al salir
  }, [activeIndex, data.length]);

  // Maneja el scroll manual del usuario para actualizar el puntito activo
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled // Hace que se "pegue" imagen por imagen
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.carouselCard} // Usamos nuevo estilo para carrusel
            onPress={() => navigation.navigate('EventDetail', { eventId: item.id })}
          >
            <Image source={{ uri: item.imagen }} style={styles.featuredImage} />
            <View style={styles.featuredOverlay}>
              <View style={styles.featuredBadge}>
                 <Text style={styles.featuredBadgeText}>HEADLINER</Text>
              </View>
              <Text style={styles.featuredTitle}>{item.titulo}</Text>
              <Text style={styles.featuredSubtitle}>{item.lugar}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Indicadores (Puntitos) */}
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? '#4ADE80' : '#555' }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

// --- PANTALLA PRINCIPAL ---
const HomeScreen = ({ navigation }) => {
  // Filtramos: Los destacados van al Carrusel, el resto a la lista vertical
  const featuredEvents = EVENTOS_MOCK.filter(e => e.esDestacado);
  const listEvents = EVENTOS_MOCK.filter(e => !e.esDestacado); 
  // Nota: Si quieres que TODOS salgan abajo también, usa "EVENTOS_MOCK" directo en listEvents

  const renderEventItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.eventCard}
      onPress={() => navigation.navigate('EventDetail', { eventId: item.id })}
    >
      <Image source={{ uri: item.imagen }} style={styles.eventImageSmall} />
      <View style={styles.eventInfo}>
        <View>
          <Text style={styles.eventTitle} numberOfLines={1}>{item.titulo}</Text>
          <Text style={styles.eventDate}>{item.fecha}</Text>
        </View>
        <Text style={styles.eventPrice}>Desde ${item.precioBase}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greeting}>Hola, Itiel 👋</Text>
          <Text style={styles.username}>Próximos Shows</Text>
        </View>
        <TouchableOpacity style={styles.avatarPlaceholder} onPress={() => navigation.navigate('Cuenta')}>
           <Ionicons name="person" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* LISTA VERTICAL (Contiene el Carrusel como Header) */}
      <FlatList
        data={EVENTOS_MOCK} // Mostramos todos abajo o usa 'listEvents' si no quieres repetir
        keyExtractor={item => item.id}
        renderItem={renderEventItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.sectionTitle}>🔥 Cartelera Estelar</Text>
            
            {/* AQUI ESTÁ EL CARRUSEL NUEVO */}
            <FeaturedCarousel data={featuredEvents} navigation={navigation} />

            <Text style={styles.sectionTitle}>Más Fechas</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
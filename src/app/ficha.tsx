import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [stats, setStats] = useState({
    ataque: 0,
    defensa: 0,
    mente: 0,
    otro: 0,
    destreza: 0,
    interaccion: 0,
  });

  return (
    <View style={styles.container}>
      <Text>Ficha del personaje, pendiente de guardado en la nube</Text>
      <Text>Ficha que se adapte a movil</Text>
      <View>
        <Text>top info</Text>
      </View>
      <View>
        <View>
          <View>
            <Text>Ataque: {stats.ataque}</Text>
          </View>
          <View>
            <Text>defensa: {stats.defensa}</Text>
          </View>
          <View>
            <Text>mente: {stats.mente}</Text>
          </View>
          <View>
            <Text>otro: {stats.otro}</Text>
          </View>
          <View>
            <Text>destreza: {stats.destreza}</Text>
          </View>
          <View>
            <Text>interaccion: {stats.interaccion}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>habilidades</Text>
      </View>
      <View>
        <View>
          <Text>objetos</Text>
        </View>
        <View>
          <Text>descripcion</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

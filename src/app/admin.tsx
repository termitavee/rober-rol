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
      <Text>Para que el master modifique cosas</Text>
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

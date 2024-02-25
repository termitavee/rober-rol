import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //   return <Redirect href={'/rober-rol'} />;

  return (
    <View style={styles.container}>
      <Text>Hacer un login o algo</Text>

      <Link href={'/ficha'}>ficha</Link>
      <Link href={'/info'}>info</Link>
      <Link href={'/admin'}>admin</Link>
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

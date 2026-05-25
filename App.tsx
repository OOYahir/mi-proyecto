import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const nombre: string = "Yahir Orduña";
const carrera: string = "Ing. en Sistemas Computacionales";
const cuatrimestre: number = 9;
const promedio: number = 8.5;
const titulado: boolean = false;

export default function App() {
  return (
    <View style={styles.container}>
      {/* Imagen desde internet */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        }}
        style={styles.avatar}
      />

      <Text style={styles.titulo}>{nombre}</Text>
      <Text style={styles.subtitulo}>{carrera}</Text>
      <Text style={styles.dato}>Cuatrimestre: {cuatrimestre}</Text>
      <Text style={styles.dato}>Promedio: {promedio}</Text>
      <Text style={styles.dato}>Titulado: {String(titulado)}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8dabd8",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 35, // la mitad del width/height = círculo
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: "#ffffff",
    marginBottom: 16,
  },
  dato: {
    fontSize: 16,
    marginBottom: 6,
  },
});

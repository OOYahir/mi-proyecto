import { View, Text, StyleSheet, Image } from "react-native";

const nombre1: string = "Yahir Orduña";
const nombre2: string = "Roberto Carlos Rangel ";
const nombre3: string = "Gerardo Joshua Piña";
const carrera: string = "Ingenieros en Sistemas Computacionales";
const titulado: boolean = false;
const materiasAprobadas: number = 30;

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.joseartgallery.com/143802/conversions/interior-painting-vibrant-bold-abstract-shapes-art-thumb900.jpg",
        }}
        style={styles.avatar}
      />
      <Text style={styles.titulo}>{nombre1}</Text>
      <Text style={styles.titulo}>{nombre2}</Text>
      <Text style={styles.titulo}>{nombre3}</Text>
      <Text style={styles.subtitulo}>{carrera}</Text>
      <Text style={styles.info}>Titulado: {titulado}</Text>
      <Text style={styles.info}>Materias Aprobadas: {materiasAprobadas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: "#666",
  },
  info: {
    fontSize: 16,
    marginVertical: 4,
  },
});

import { View, Text, StyleSheet } from "react-native";

export default function MateriasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Materias Difíciles</Text>

      <Text style={styles.subtitulo}>
        Las materias más difíciles a mi parecer son:
      </Text>

      <Text style={styles.materia}>• Inglés</Text>

      <Text style={styles.materia}>• Sistemas Embebidos</Text>

      <Text style={styles.materia}>
        • Desarrollo de Negocios para Tecnologías de la Información
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },

  materia: {
    fontSize: 18,
    marginBottom: 10,
  },
});

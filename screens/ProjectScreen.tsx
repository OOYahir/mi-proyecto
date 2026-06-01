import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const proyecto1 = {
  nombre: "ActiScan",
  version: "1.0.0",
  descripcion: "Sistema de gestion de activos fijos y auditorias",
  repositorio: "https://github.com/yisusmartinez5/ActiScan.git",
  activo: true,
};

const proyecto2 = {
  nombre: "Healthy Reminder",
  version: "1.0.0",
  descripcion: "sistema de gestión para citas odontologicas",
  repositorio: "https://github.com",
  activo: true,
};

const proyecto3 = {
  nombre: "Veyli",
  version: "1.0.0",
  descripcion: "Sistema de gestión y transporte de logística de paquetería",
  repositorio: "https://github.com",
  activo: true,
};

const ProjectScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61Us4_3kCAOL_bC2rCCU95S1PHsZVwZXneA&s",
        }}
        style={styles.avatar}
      />
      <Image source={require("../assets/logo.jpeg")} style={styles.avatar} />
      <Text style={styles.title}>Detalles del Proyecto</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Datos del Proyecto (JSON)</Text>
        <Text style={styles.jsonText}>
          {JSON.stringify(proyecto1, null, 2)}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Datos del Proyecto (Campo por Campo)
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Nombre: </Text> {proyecto1.nombre}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Versión:</Text> {proyecto1.version}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Descripción:</Text>{" "}
          {proyecto1.descripcion}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Repositorio:</Text>{" "}
          {proyecto1.repositorio}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Activo:</Text> {proyecto1.activo}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Datos del Proyecto (Campo por Campo)
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Nombre:</Text> {proyecto2.nombre}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Versión:</Text> {proyecto2.version}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Descripción:</Text>{" "}
          {proyecto2.descripcion}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Repositorio:</Text>{" "}
          {proyecto2.repositorio}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Activo:</Text> {proyecto2.activo}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Datos del Proyecto (Campo por Campo)
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Nombre:</Text> {proyecto3.nombre}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Versión:</Text> {proyecto3.version}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Descripción:</Text>{" "}
          {proyecto3.descripcion}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Repositorio:</Text>{" "}
          {proyecto3.repositorio}
        </Text>
        <Text style={styles.field}>
          <Text style={styles.fieldName}>Activo:</Text> {proyecto3.activo}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  jsonText: {
    fontFamily: "monospace",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    color: "#333",
  },
  field: {
    fontSize: 16,
    marginBottom: 5,
  },
  fieldName: {
    fontWeight: "bold",
  },
});

export default ProjectScreen;

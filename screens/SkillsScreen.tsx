import React from "react";
import { View, Text, StyleSheet } from "react-native";

const skills: string[] = [
  "JavaScript",
  "Git Hub",
  "Python",
  "SQLServer",
  "mysql",
  "React Native",
];

const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Habilidades</Text>
      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillChip}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillChip: {
    backgroundColor: "#007BFF",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    margin: 5,
  },
  skillText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default SkillsScreen;

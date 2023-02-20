import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardActivity from "./CardActivity";
import Icon from "@expo/vector-icons/Ionicons";

export default function LastActivity() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu última actividad</Text>
      <CardActivity
        nameUser="FQ"
        description="Transferencia recibida de Fed"
        service="servicios"
        price="+ $ 3.500,00"
        date="14 de febrero"
      />
      <CardActivity
        nameUser="C"
        description="Recarga linea +54 1126608939"
        service="Claro"
        price="+ $ 2.300,00"
        date="12 de enero"
      />
      <CardActivity
        nameUser="GB"
        description="Transferencia enviada a Gus"
        service="pagos"
        price="+ $ 7.500,00"
        date="15 de octubre"
      />
      <TouchableOpacity style={styles.containerFooter} activeOpacity={0.8}>
        <Text style={styles.textFooter}>Ver toda tu actividad</Text>
        <Icon name="chevron-forward-outline" size={16} color="#009ee3" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: "#fff",
    marginBottom: 100,
    borderRadius: 8,
    elevation: 5,
  },
  title: {
    padding: 16,
    borderBottomWidth: 0.6,
    borderBottomColor: "#ccc",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "rgba(0,0,0,.9)",
    marginBottom: 8,
  },
  containerFooter: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 0.6,
    borderTopColor: "#ccc",
    marginTop: 8,
  },
  textFooter: {
    color: "#009ee3",
    fontWeight: "500",
    fontSize: 13,
    letterSpacing: 0.3,
  },
});

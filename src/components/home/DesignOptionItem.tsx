import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { DesignOptionItemProps } from "../../types";

const DesignOptionItem = ({ item }: DesignOptionItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name={item?.icon as any} size={23} color="black" />
      <Text style={styles.text}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 20,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: "#666",
  },
});

export default DesignOptionItem;

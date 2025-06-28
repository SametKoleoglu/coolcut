/**
 * Node Modules
 */
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

/**
 * Local Modules
 */
import { TemplateItemProps } from "../../types";
import { COLORS } from "../../constants/color";

const TemplateItem = ({ item, onPress }: TemplateItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.freeBadge}>
          <Text style={styles.freeBadgeText}>Free</Text>
        </View>

        <Text style={styles.name}>{item?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  imageContainer: {
    position: "relative",
    width: 120,
    height: 200,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  freeBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: COLORS.black,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  freeBadgeText: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: "bold",
  },
  name: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    paddingVertical: 2,
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
  },
});

export default TemplateItem;

/**
 * Node Modules
 */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";

/**
 * Local Modules
 */
import { GRID_LAYOUTS } from "../../constants/layouts";
import GridItem from "./GridItem";
import { COLORS } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { GridLayout } from "../../types";

const Grid = () => {
  const navigation = useNavigation();
  const handleGridSelect = (grid: GridLayout) => {
    navigation.navigate("Collage", {
      selectedGrid: grid,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Grid</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={GRID_LAYOUTS}
        renderItem={({ item, index }) => (
          <GridItem
            item={item}
            key={index}
            onPress={() => handleGridSelect(item) as any}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    gap: 10,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
  },
  seeAll: {
    color: COLORS.red,
    fontSize: 16,
  },
  listContainer: {},
});

export default Grid;

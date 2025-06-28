import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { DESIGN_OPTIONS } from "../../constants/layouts";
import DesignOptionItem from "./DesignOptionItem";
import { COLORS } from "../../constants/color";

const Section = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DESIGN_OPTIONS}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <DesignOptionItem
            item={item}
            key={index}
            onPress={() => handleDesignOptionSelect(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});

export default Section;

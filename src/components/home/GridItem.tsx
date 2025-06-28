import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { GridItemProps } from "../../types";
import { COLORS } from "../../constants/color";

const GridItem = ({ item, onPress }: GridItemProps) => {
  const renderShape = () => {
    switch (item?.shape) {
      case "heart":
        return <View style={[styles.gridCell, styles.heartShape]} />;
      case "circle":
        return item.layout[0].map((_, j) => (
          <View key={j} style={[styles.gridCell, styles.circleShape]} />
        ));
      case "clover":
        return <View style={[styles.gridCell, styles.cloverShape]} />;
      case "hexagon":
        return item.layout[0].map((_, j) => (
          <View key={j} style={[styles.gridCell, styles.hexagonShape]} />
        ));
      default:
        return item.layout.map((row, i) => (
          <View key={i} style={styles.gridRow}>
            {row.map((cell, j) => (
              <View
                key={j}
                style={[
                  styles.gridCell,
                  {
                    flex:
                      Math.max(...row.filter((_, idx) => idx !== j)) === cell
                        ? 2
                        : 1,
                  },
                ]}
              ></View>
            ))}
          </View>
        ));
    }
  };
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onPress}>
      <View style={styles.gridPreview}>{renderShape()}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    marginRight: 10,
  },
  gridPreview: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  gridRow: {
    flex: 1,
    flexDirection: "row",
  },
  gridCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.aqua,
    backgroundColor: COLORS.beige,
  },
  heartShape: {
    position: "relative",
    overflow: "hidden",
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: COLORS.beige,
    transform: [{ rotate: "45deg" }],
  },
  circleShape: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: COLORS.beige,
    borderColor: COLORS.aqua,
    marginHorizontal: 5,
  },
  cloverShape: {
    position: "relative",
    width: 60,
    height: 60,
    backgroundColor: COLORS.beige,
    borderWidth: 1,
    borderColor: COLORS.aqua,
    borderRadius: 30,
  },
  hexagonShape: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.beige,
    borderWidth: 1,
    borderColor: COLORS.aqua,
    marginHorizontal: 5,
    // clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  },
});

export default GridItem;

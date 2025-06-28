/**
 * Node Modules
 */
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

/**
 * Local Modules
 */
import { TEMPLATES } from "../../constants/layouts";
import { COLORS } from "../../constants/color";
import TemplateItem from "./TemplateItem";

const Templates = ({ data, title }: { data: any; title: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TemplateItem item={item} onPress={() => {}} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 20,
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
  listContainer: {
    gap: 10,
  },
});

export default Templates;

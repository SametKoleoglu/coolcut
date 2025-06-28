import { StyleSheet, Text, View } from "react-native";

/**
 * Custom Modules
 */
import { TOOLS } from "../../constants/tool";
import Tool from "./Tool";

const Tools = () => {
  return (
    <View style={styles.container}>
      {TOOLS.map((tool) => {
        return (
          <Tool
            id={tool.id}
            key={tool.id}
            name={tool.name}
            label={tool.label}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Tools;

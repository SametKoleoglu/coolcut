/**
 * Node Modules
 */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/**
 * Local Modules
 */
import { ToolProps } from "../../types";
import { COLORS } from "../../constants/color";

const Tool = ({ id, name, label }: ToolProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.subContainer}>
        <Ionicons name={name as any} size={23} color={COLORS.white} />
      </View>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Tool;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  subContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: COLORS.black,
    fontWeight: "500",
  },
});

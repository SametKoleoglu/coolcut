/**
 * Node Modules
 */
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

/**
 * Local Modules
 */
import { TabBarIconProps } from "../../types";
import { COLORS } from "../../constants/color";

const TabBarIcon = ({
  name,
  focused,
  size,
  color,
  isPlus,
}: TabBarIconProps) => {
  return (
    <View style={[styles.container, isPlus && styles.plusContainer]}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  plusContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -23,
    borderRadius: 30,
  },
});

export default TabBarIcon;

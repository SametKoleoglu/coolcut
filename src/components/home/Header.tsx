import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon}>
        <Ionicons name="settings-outline" size={23} color="black" />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={23}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Doğum günü ara, aşk, huzur..."
          style={styles.searchInput}
        />
      </View>
      <TouchableOpacity style={styles.shopIcon}>
        <Ionicons name="storefront-outline" size={23} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  settingsIcon: {
    marginRight: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: COLORS.black,
  },
  shopIcon: {
    marginLeft: 8,
  },
});

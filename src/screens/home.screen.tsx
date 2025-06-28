/**
 * Node Modules
 */
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Local Modules
 */
import { COLORS } from "../constants/color";
import { Header, Tools, Section, Grid, Templates } from "../components/home";
import { BIRTHDAY_TEMPLATES, TEMPLATES } from "../constants/layouts";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* HEADER */}
        <Header />
        <Tools />
        <Section />
        <Grid />
        <Templates data={TEMPLATES} title="Spring Story" />
        <Templates data={BIRTHDAY_TEMPLATES} title="Happy Birthday Card" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    paddingHorizontal: 10,
    gap: 20,
  },
});

export default HomeScreen;

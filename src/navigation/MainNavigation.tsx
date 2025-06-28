/**
 * Node Modules
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/**
 * Custom Modules
 */
import HomeStack from "./stack/home.stack";
import TabBarIcon from "../components/global/TabBarIcon";
import { CreateScreen, EditScreen, MeWorks } from "../screens";
import { StyleSheet } from "react-native";
import { COLORS } from "../constants/color";

/**
 * Declarations
 */
const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: COLORS.teal,
        tabBarInactiveTintColor: COLORS.tertiary,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabBarIcon
              name="home"
              focused={focused}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabBarIcon
              name="add"
              focused={focused}
              size={size}
              color={color}
              isPlus
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me Works"
        component={MeWorks}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabBarIcon
              name="folder-outline"
              focused={focused}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Me Works",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: -2 },
    paddingBottom: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 5,
    color: "#8e8e93",
  },
});

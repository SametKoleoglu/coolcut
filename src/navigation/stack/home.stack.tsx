import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CollageScreen,
  HomeScreen,
  TemplatePreviewScreen,
} from "../../screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Collage" component={CollageScreen} />
      <Stack.Screen name="TemplatePreview" component={TemplatePreviewScreen} />
    </Stack.Navigator>
  );
}

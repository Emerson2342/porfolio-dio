import { Routes } from "./src/routes";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'#0e3987'}
      />
      <Routes />
    </View>
  );
}

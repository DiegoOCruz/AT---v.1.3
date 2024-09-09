import { AppBar } from "@/components";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";


export default function HomeScreen() {
  return (
    <>
      <AppBar title="Home"/>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
        <Text>Teste</Text>
        <Button onPress={() => {
          router.push("/settings");
        }}>Configuraçoes</Button>
      </View>
    </>
  );
}


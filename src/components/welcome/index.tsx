import { Image, Text, View } from "react-native";
import { s } from "./style";

export function Welcome(){
  return <View>
    <Image source={require('@/assets/logo.png')} style={s.logo} />
    <Text style={s.title}>Bem vindo ao DPerto</Text>
    <Text style={s.subtitle}>Tenha cupons de vantagem para usar{"\n"} em seus estabelecimentos favoritos.</Text>
  </View>
}
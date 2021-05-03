import React from "react";
import { Text } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
export default function PosterDescription(props) {
  console.log(props);
  //   const posters = useSelector((state) => state.searchReduser.data);
  const { image, summary, name } = props.route.params.show;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            image === null
              ? "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png"
              : image.medium,
        }}
        style={{ width: 200, height: 200, borderRadius: 30 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Text h2>{name}</Text>
      <ScrollView>
        <Text style={styles.text}>
          {summary !== null ? summary.replace(/<\/?[^>]+(>|$)/g, "") : summary}
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    marginRight: "auto",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    marginBottom: StatusBar.currentHeight || 0,
  },
  text: {
    textAlign: "center", // <-- the magic
    fontSize: 18,
    marginTop: 0,
    width: 300,
  },
});

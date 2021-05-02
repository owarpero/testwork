import React from "react";
import { Text } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
export default function Poster(props) {
  console.log(props);
  return (
    <View>
      <Image
        source={{
          uri:
            props.poster.show.image === null
              ? "https://m.buro247.ru/images/senina/gender_google_m.jpg"
              : props.poster.show.image.medium,
        }}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text h4>{props.poster.show.name}</Text>
    </View>
  );
}

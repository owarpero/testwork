import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function SearchResults(props) {
  const posters = useSelector((state) => state.searchReduser.data);

  const post = ({ item }) => {
    console.log(item);
    const { image, name, id } = item.show;

    const openSummary = (target, id) => {
      let currentPoster = [];
      posters.forEach((element) => {
        element.show.id === id ? (currentPoster = element) : false;
      });

      props.navigation.navigate("Film discription", currentPoster);
    };
    return (
      <TouchableWithoutFeedback onPress={(e) => openSummary(e.target, id)}>
        <View
          key={uuid()}
          style={styles.item}
          //   onPress={(e) => openSummary(e, id)}
        >
          <Image
            source={{
              uri:
                image === null || image === undefined
                  ? "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png"
                  : image.medium,
            }}
            style={{ width: 160, height: 200, ...styles.image }}
          />
          <Text h2 numberOfLines={1} style={{ maxWidth: 150, fontSize: 20 }}>
            {name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={posters}
        renderItem={post}
        keyExtractor={(item) => item.show.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 3,
    marginVertical: 2,
    marginHorizontal: 3,
  },
  title: {
    fontSize: 32,
  },
  image: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.68,
  },
});

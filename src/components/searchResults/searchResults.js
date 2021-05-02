import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import Poster from "./poster";
export default function SearchResults() {
  const posters = useSelector((state) => state.searchReduser.data);
  console.log(posters);
  return (
    <View>
      {posters.length > 1 ? (
        posters.map((el, index) => (
          <Text key={index}>
            <Poster poster={el}></Poster>
          </Text>
        ))
      ) : (
        <Text>Enter movie in search</Text>
      )}
    </View>
  );
}

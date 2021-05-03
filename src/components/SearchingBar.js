import React, { useState } from "react";

import { View } from "react-native";
import { feachPosters } from "../store/search/action";
import { useDispatch } from "react-redux";
import { SearchBar } from "react-native-elements";
import SearchResults from "./searchResults/searchResults";
import { ScrollView } from "react-native";

export default function SearchingBar(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  console.log(props);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchBar
        showLoading
        platform="android"
        placeholder="Search"
        onChangeText={(text) => {
          dispatch(feachPosters(text));
          setText(text);
        }}
        value={text}
      />
      <ScrollView>
        <SearchResults navigation={props.navigation}></SearchResults>
      </ScrollView>
    </View>
  );
}

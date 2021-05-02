import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { feachPosters } from "../store/search/action";
import { useDispatch } from "react-redux";
import { SearchBar } from "react-native-elements";
import SearchResults from "./searchResults/searchResults";
export default function SearchingBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <SearchBar
        style={{ height: 40 }}
        placeholder="Search film"
        onChangeText={(text) => {
          dispatch(feachPosters(text));
          setText(text);
        }}
        value={text}
      />
      <SearchResults></SearchResults>
      <StatusBar style="auto" />
    </View>
  );
}

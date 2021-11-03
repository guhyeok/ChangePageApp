import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default class Loading extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../image/MK_StartLogo.png")}
        style={{
            width: "100%",
            height: 100,
          position:'relative',
          alignItems:'center',
          justifyContent:'center',

        }}
      ></ImageBackground>
    );
  }
}

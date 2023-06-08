import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "color";

export default function ColorDetails({ route }) {
  const { color: name } = route.params;
  try {
    const color = Color(name);
    const textColor = { color: color.negate().toString() };
    return (
      <View style={[styles.container, { backgroundColor: name }]}>
        <Text style={[styles.text, { color: textColor.color }]}>
          Color Details: {name}
        </Text>
        <Text style={[styles.text, { color: textColor.color }]}>
          {color.rgb().toString()}{" "}
        </Text>
        <Text style={[styles.text, { color: textColor.color }]}>
          {color.hsl().toString()}{" "}
        </Text>
        <Text style={[styles.text, { color: textColor.color }]}>
          luminosity: {color.luminosity().toString()}{" "}
        </Text>
        <Text style={[styles.text, { color: textColor.color }]}>
          {color.hex().toString()}{" "}
        </Text>
      </View>
    );
  } catch (error) {
    return <Text style={styles.text}>Invalid color</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    justifyContent: "center",
  },
});

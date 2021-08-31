import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const SelectTemperature = ({ selectedTemperature, setSelectedTemperature }) => {
  /* Default Normal */
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Normal"
          onPress={() => setSelectedTemperature("Normal")}
          buttonStyle={
            selectedTemperature == "Normal"
              ? {
                  backgroundColor: "#4487d4",
                }
              : {
                  backgroundColor: "gray",
                }
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Alta"
          onPress={() => setSelectedTemperature("Alta")}
          buttonStyle={
            selectedTemperature == "Alta"
              ? {
                  backgroundColor: "#4487d4",
                }
              : {
                  backgroundColor: "gray",
                }
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default SelectTemperature;

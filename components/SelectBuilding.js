import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const SelectBuilding = ({ selectedBuilding, setSelectedBuilding }) => {
  /* Default Miraflores */
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Miraflores"
          onPress={() => setSelectedBuilding("Miraflores")}
          buttonStyle={
            selectedBuilding == "Miraflores"
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
          title="Isla Teja"
          onPress={() => setSelectedBuilding("Isla Teja")}
          buttonStyle={
            selectedBuilding == "Isla Teja"
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

export default SelectBuilding;

import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerBuilding = ({
  pickerRef,
  selectedBuilding,
  setSelectedBuilding,
}) => {
  return (
    <Picker
      style={{ width: "90%", fontSize: 26, fontWeight: "bold" }}
      mode="dropdown"
      ref={pickerRef}
      selectedValue={selectedBuilding}
      onValueChange={(itemValue, itemIndex) => setSelectedBuilding(itemValue)}
    >
      <Picker.Item label="1000" value="1k" />
      <Picker.Item label="2000" value="2k" />
      <Picker.Item label="3000" value="3k" />
      <Picker.Item label="4000" value="4k" />
      <Picker.Item label="5000" value="5k" />
      <Picker.Item label="6000" value="6k" />
      <Picker.Item label="7000" value="7k" />
      <Picker.Item label="8000" value="8k" />
      <Picker.Item label="9000" value="9k" />
      <Picker.Item label="10000 (Informatica)" value="10k" />
    </Picker>
  );
};
export default PickerBuilding;

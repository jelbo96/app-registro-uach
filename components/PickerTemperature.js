import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerTemperature = ({
  pickerRef,
  selectedTemperature,
  setSelectedTemperature,
}) => {
  return (
    <Picker
      style={{ width: "90%", fontSize: 26, fontWeight: "bold" }}
      ref={pickerRef}
      selectedValue={selectedTemperature}
      mode="dropdown"
      onValueChange={(itemValue, itemIndex) =>
        setSelectedTemperature(itemValue)
      }
    >
      <Picker.Item label="34 °C" value="34" />
      <Picker.Item label="34.5 °C" value="34.5" />
      <Picker.Item label="35 °C" value="35" />
      <Picker.Item label="35.5 °C" value="35.5" />
      <Picker.Item label="36 °C" value="36" />
      <Picker.Item label="36.5 °C" value="36.5" />
      <Picker.Item label="37 °C" value="37" />
      <Picker.Item label="37.5 °C" value="37.5" />
      <Picker.Item label="38 °C" value="38" />
      <Picker.Item label=">38 °C" value=">38" />
    </Picker>
  );
};
export default PickerTemperature;

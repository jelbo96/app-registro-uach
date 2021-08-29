import React from "react";
import { Picker } from "@react-native-picker/picker";

const PickerTemperature = ({
  pickerRef,
  selectedTemperature,
  setSelectedTemperature,
}) => {
  let temperatures = [
    { key: 1, value: "34", name: "34 °C" },
    { key: 2, value: "34.5", name: "34.5 °C" },
    { key: 3, value: "35", name: "35 °C" },
    { key: 4, value: "35.5", name: "35.5 °C" },
    { key: 5, value: "36", name: "36 °C" },
    { key: 6, value: "36.5", name: "36.5 °C" },
    { key: 7, value: "37", name: "37 °C" },
    { key: 8, value: "37.5", name: "37.5 °C" },
    { key: 9, value: "38", name: "38 °C" },
    { key: 10, value: ">38", name: ">38 °C" },
  ];
  return (
    <Picker
      style={{
        width: "100%",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 12,
      }}
      ref={pickerRef}
      selectedValue={selectedTemperature}
      mode="dropdown"
      onValueChange={(itemValue, itemIndex) =>
        setSelectedTemperature(itemValue)
      }
    >
      {temperatures.map((temp) => (
        <Picker.Item key={temp.key} label={temp.name} value={temp.value} />
      ))}
    </Picker>
  );
};
export default PickerTemperature;

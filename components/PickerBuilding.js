import React from "react";
import { Picker } from "@react-native-picker/picker";

const PickerBuilding = ({
  pickerRef,
  selectedBuilding,
  setSelectedBuilding,
}) => {
  let buildings = [
    { key: 1, value: "1k", name: "1000 (Decanatura)" },
    { key: 2, value: "2k", name: "2000 (Naval)" },
    { key: 3, value: "3k", name: "3000" },
    { key: 4, value: "4k", name: "4000" },
    { key: 5, value: "5k", name: "5000 (Casa Haverbeck)" },
    { key: 6, value: "6k", name: "6000 (Cs. Basicas)" },
    { key: 7, value: "7k", name: "7000" },
    { key: 8, value: "8k", name: "8000" },
    { key: 9, value: "9k", name: "9000" },
    { key: 10, value: "10k", name: "10000 (Informática)" },
    { key: 11, value: "11k", name: "11000 (Obras Civiles - Construcción)" },
    { key: 12, value: "12k", name: "12000 (Biblioteca)" },
    { key: 13, value: "13k", name: "13000 (Industrial)" },
    { key: 14, value: "14k", name: "14000" },
    { key: 15, value: "100", name: "100 (Canal de Ensayos)" },
    { key: 16, value: "200", name: "200" },
    { key: 17, value: "400", name: "400" },
    { key: 18, value: "500", name: "500 (LEMCO)" },
    { key: 19, value: "Casino", name: "Casino" },
    { key: 20, value: "Gimnasio", name: "Gimnasio" },
    { key: 21, value: "Estadio", name: "Estadio" },
  ];

  return (
    <Picker
      style={{
        width: "100%",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 24,
      }}
      mode="dropdown"
      ref={pickerRef}
      selectedValue={selectedBuilding}
      onValueChange={(itemValue, itemIndex) => setSelectedBuilding(itemValue)}
    >
      {buildings.map((building) => (
        <Picker.Item
          key={building.key}
          label={building.name}
          value={building.value}
        />
      ))}
    </Picker>
  );
};
export default PickerBuilding;

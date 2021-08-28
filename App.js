import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Camera from "./components/Camera";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [valor, setValor] = useState({ rut: "19413757-5", serie: "1234838" });
  const [startCamera, setStartCamera] = React.useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState();
  const [selectedTemperature, setSelectedTemperature] = useState();

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const __startCamera = () => {
    setStartCamera(true);
  };

  const sendData = () => {
    /* Añadir al objeto valor
       building:
       datetime:
       temperature:
    */
    setValor({
      ...valor,
      building: selectedBuilding /* A partir de selector */,
      datetime: new Date().toLocaleString(),
      temperature: selectedTemperature /* A Partir de selector */,
    });

    console.log(valor);

    /* Enviar a firebase */
  };

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera
          startCamera={startCamera}
          setStartCamera={setStartCamera}
          valor={valor}
          setValor={setValor}
        />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Metodo de validación: {valor.documentType}
          </Text>

          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            RUT:{" "}
            {valor.documentType == "paseCovid" ? "Valor oculto" : valor.rut}
          </Text>

          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Temperatura:
          </Text>

          <Picker
            style={{ height: 200, width: 300 }}
            ref={pickerRef}
            selectedValue={selectedTemperature}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedTemperature(itemValue)
            }
          >
            <Picker.Item label="34" value="34" />
            <Picker.Item label="34.5" value="34.5" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="35.5" value="35.5" />
            <Picker.Item label="36" value="36" />
            <Picker.Item label="36.5" value="36.5" />
            <Picker.Item label="37" value="37" />
            <Picker.Item label="37.5" value="37.5" />
            <Picker.Item label="38" value="38" />
            <Picker.Item label=">38" value=">38" />
          </Picker>

          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Edificio:
          </Text>

          <Picker
            style={{ height: 200, width: 300 }}
            ref={pickerRef}
            selectedValue={selectedBuilding}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBuilding(itemValue)
            }
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

          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Escanear
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => sendData()}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Guardar
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

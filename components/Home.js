import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Camera from "./Camera";
import PickerTemperature from "./PickerTemperature";
import PickerBuilding from "./PickerBuilding";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Home() {
  const [valor, setValor] = useState({ rut: "---------", serie: "-------" });
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
        <ScrollView
          style={styles.scroll}
          /*  style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }} */
        >
          <Text style={styles.textLabel}>
            Metodo de validación: {valor.documentType}
          </Text>

          <Text style={styles.textBigLabel}>
            {!valor.documentType ? "Todavía no se escanea" : valor.documentType}
          </Text>

          <Text style={styles.textLabel}>RUT:</Text>

          <Text style={styles.textBigLabel}>
            {valor.documentType == "paseCovid" ? "Valor oculto" : valor.rut}
          </Text>

          <Text style={styles.textLabel}>Temperatura:</Text>

          <PickerTemperature
            pickerRef={pickerRef}
            selectedTemperature={selectedTemperature}
            setSelectedTemperature={setSelectedTemperature}
          />

          <Text style={styles.textLabel}>Edificio:</Text>

          <PickerBuilding
            pickerRef={pickerRef}
            selectedBuilding={selectedBuilding}
            setSelectedBuilding={setSelectedBuilding}
          />

          <View style={styles.containerButtons}>
            <Button
              icon={<Icon name="camera" size={20} color="white" />}
              title=" Escanear"
              onPress={__startCamera}
              buttonStyle={styles.button}
            />

            <Button
              icon={<Icon name="save" size={20} color="white" />}
              title=" Guardar"
              onPress={() => sendData()}
              buttonStyle={[styles.button, styles.buttonSave]}
            />
          </View>
        </ScrollView>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    padding: 16,
  },
  textLabel: {
    color: "#000",
    fontSize: 18,
  },
  textBigLabel: {
    color: "#000",
    fontSize: 26,
    fontWeight: "bold",
    paddingBottom: 12,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
  },
  button: {
    fontSize: 24,
    width: 150,
  },
  buttonSave: {
    backgroundColor: "green",
  },
});

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Camera from "./components/Camera";

export default function App() {
  const [valor, setValor] = useState("Prueba de captura de datos");
  const [startCamera, setStartCamera] = React.useState(false);

  const __startCamera = () => {
    setStartCamera(true);
  };

  console.log("imprimiendo valor", valor);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera
          startCamera={startCamera}
          setStartCamera={setStartCamera}
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
            RUT
          </Text>

          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Selector de Temperatura
          </Text>

          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Camara: {valor}
          </Text>

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

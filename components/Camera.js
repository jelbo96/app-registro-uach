import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Camera({
  startCamera,
  setStartCamera,
  valor,
  setValor,
}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    /* Procesar el tipo de codigo */

    let regexCarnet =
      /^https:\/\/portal\.sidiv\.registrocivil\.cl\/docstatus\?RUN=[0-9]+-[a-z,A-Z,0-9]&type=CEDULA&serial=[0-9]+&mrz=[0-9]+$/i;
    let regexPaseCovid =
      /^https:\/\/scanmevacuno\.gob\.cl\/\?a=[0-9]+&b=[0-9]+&c=[0-9]+$/i;
    let regexPaseUach = /^[0-9]+-[a-z,A-Z,0-9]$/i;

    if (regexCarnet.test(data)) {
      setValor({
        documentType: "carnet",
        rut: data.substring(data.indexOf("RUN=") + 4, data.indexOf("&type")),
        serie: data.substring(
          data.indexOf("serial=") + 7,
          data.indexOf("&mrz")
        ),
      });
    } else if (regexPaseCovid.test(data)) {
      setValor({
        documentType: "paseCovid",
        aValue: data.substring(data.indexOf("a=") + 2, data.indexOf("&b")),
        bValue: data.substring(data.indexOf("b=") + 2, data.indexOf("&c")),
      });
    } else if (regexPaseUach.test(data)) {
      setValor({
        documentType: "paseUach",
        rut: data,
      });
    } else {
      alert("El código no es válido");
    }

    /* alert(JSON.stingify(valor)); */
    console.log(valor);
    setScanned(true);
    setStartCamera(false);
  };

  if (hasPermission === null) {
    return <Text>Se requiere acceso a la cámara</Text>;
  }
  if (hasPermission === false) {
    return (
      <Text>
        La app no tiene acceso a la cámara, verifique su configuración
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      >
        <TouchableOpacity
          onPress={() => setStartCamera(false)}
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
            Volver
          </Text>
        </TouchableOpacity>
      </BarCodeScanner>
      {/*   {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  camera: {
    height: "100%",
  },
});

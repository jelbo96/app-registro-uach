import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";

// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";

import getEnvVars from "./enviroment";
const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  REACT_APP_DATABASE_URL,
} = getEnvVars();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  databaseURL: REACT_APP_DATABASE_URL,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

/* const firebaseConfig = {
  apiKey: "AIzaSyACoiJAzJLkL82dJZR4D1KtZSTNX0UAQmk",
  authDomain: "app-registro-uach.firebaseapp.com",
  projectId: "app-registro-uach",
  databaseURL: "https://app-registro-uach-default-rtdb.firebaseio.com/",
  storageBucket: "app-registro-uach.appspot.com",
  messagingSenderId: "316102660619",
  appId: "1:316102660619:web:e141dc6cfdf01f0da7ad0e",
};
 */
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Seguimiento UACh" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

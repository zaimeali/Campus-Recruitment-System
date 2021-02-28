import React from "react";

// Routes
import Route from "./routes/Route";

// Firebase
import * as firebase from "firebase";
import { firebaseConfig } from "./auth/firebase";

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

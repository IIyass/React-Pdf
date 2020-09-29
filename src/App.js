import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./component/Document";
const App = () => (
  <PDFViewer style={{ width: "100vw", height: "100vh" }}>
    <MyDocument />
  </PDFViewer>
);

export default App;

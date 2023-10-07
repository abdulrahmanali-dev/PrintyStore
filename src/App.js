import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Layout from "./components/Layout/Layout";
function App() {
  useEffect(()=> {
    window.scrollTo(0,0)
  } ,[])
  return (
      <Layout />
  );
  
}

export default App;

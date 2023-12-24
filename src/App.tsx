import { Fragment } from "react";
import "./App.css";
import Weather from "./components/weather/Index";
import { Routes, Route } from "react-router-dom";
import ApiContext from "./context/state";
import Navbar from "./components/navbar/Navbar";
import logo from "./image/logo.jpeg";

function App() {
  return (
    <Fragment>
      <ApiContext>
        <Navbar logoPicture = {logo} />
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
      </ApiContext>
    </Fragment>
  );
}

export default App;

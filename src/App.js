import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import RickAndMorty from "./pages/RickAndMorty";
import { useDispatch } from "react-redux";
import { getApiRickAndMorty } from "./redux/modules/rickAndMorty/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiRickAndMorty.trigger());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rickAndMorty" element={<RickAndMorty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

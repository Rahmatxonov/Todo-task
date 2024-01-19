import React from "react";
import { Routes, Route } from "react-router-dom";
import Pending from "./components/Pending";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Pending />} />
      </Routes>
    </div>
  );
}

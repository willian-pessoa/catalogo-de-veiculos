import { useEffect, useState } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import ProtectRoute from "./components/protect-route/protect-route.component";
import Admin from "./pages/admin/admin.page";
import Home from "./pages/home/home.page";
import Login from "./pages/login/login.page";


function App() {
 
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <Navigation />
      <Routes>
        <Route index path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/admin"} element={
          <ProtectRoute>
            <Admin />
          </ProtectRoute>
        } />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;

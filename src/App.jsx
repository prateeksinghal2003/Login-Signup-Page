import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

 import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  // user ke login /logout pe depend karega what buttons user will see,so ek variable liya isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>


        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>



        {/* you can go to dashboard only if you logged in,otherwise it should show you login page */}

        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
          } />
        
      </Routes> 

    </div>
  
  );
}

export default App;

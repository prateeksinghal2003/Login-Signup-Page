import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

 import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  // user ke login /logout pe depend karega what buttons user will see,so ek variable liya isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordData, setpasswordData] =  useState("");
  const [email, setemail] =  useState("");

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setpasswordData={setpasswordData}  passwordData={passwordData} email={email}/>}/>


        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}  setpasswordData={setpasswordData} passwordData={passwordData}  setemail={setemail}/>}/>



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

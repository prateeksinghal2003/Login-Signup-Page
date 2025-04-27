import React from "react";
import Template from "../Components/Template";
import loginImg from "../assets/loginimg.jpg";

function Login({ setIsLoggedIn , setpasswordData, passwordData , email}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
      setpasswordData={setpasswordData}
      passwordData={passwordData}
      email ={email}
    />
  );
}

export default Login;
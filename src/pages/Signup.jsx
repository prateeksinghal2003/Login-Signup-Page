import Template from "../Components/Template";
import signupImg from "../assets/signup.jpg";

function Signup({ setIsLoggedIn , setpasswordData , passwordData, setemail}) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      setpasswordData={setpasswordData}
      passwordData={passwordData}
      setemail={setemail}

    />
  );
}

export default Signup;
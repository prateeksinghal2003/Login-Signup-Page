import React from "react"
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Signupform =(props)=>
{
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();
  
    const [showCreatePass, setshowCreatePass] = useState(false);
    const [showConfirmPass, setshowConfirmPass] = useState(false);
    const [accountType, setaccountType] = useState("student");
  
    const [formData, setformData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });


// When using arrow functions, curly braces are used to define a block of code (i.e., a function body). 
// However, if you want the function to immediately return a value 
// (without the need for an explicit return statement), you should use parentheses () instead of curly braces {}.
// When you use curly braces {} after the arrow, JavaScript expects that you are writing a function body, 
// meaning you would need to explicitly use return to return the value.
// To avoid that, you use parentheses () which implicitly returns the value.
// So, replacing curly braces {} with parentheses () in your setformData will fix the issue.
  
    function changeHandler(event) 
    {
       setformData((prev)=>
       (
        {
          ...prev,[event.target.name]: event.target.value
        }
      )
      
      )  
    }

    // function changeHandler(event)
    // {
    //   setformData((prev)=>
    //   {
    //     return
    //     {
    //       ...prev,
    //       [event.target.name]: event.target.value
    //     }
    //   })
    // }
  
    function submitHandler(e) 
    {
      e.preventDefault();
      console.log(formData.password)
      console.log(formData.confirmPassword)
      if (formData.password != formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
  
      setIsLoggedIn(true);
      toast.success("Account Create");

    //   just to check
      const accountData = {
        ...formData
      }
      console.log(accountData);
  
      
      const finalData={
        ...accountData,accountType
    }

    console.log('printing final data')
    console.log(finalData);

    navigate("/dashboard");
    }

    
  
    return (
      <div >
        <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
          <button
            
            className={`${
              accountType === "student"
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-200`}

                onClick={() => setaccountType("student")}
          >
            Student
          </button>

          <button
           
            className={`${ accountType === "instructor"
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200 "
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setaccountType("instructor")}
          >
            Instructor
          </button>
        </div>

  
        <form onSubmit={submitHandler}>

        {/* this div contains first name and last name */}
        
          <div className="flex gap-x-4 mt-4">
            <label htmlFor="" className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                First Name <sup className="text-pink-200">*</sup>
              </p>

              <input
                type="text"
                required
                placeholder="Enter First Name"
                onChange={changeHandler}
                value={formData.firstName}
                name="firstName"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
            </label>
  
            <label htmlFor="" className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                required
                placeholder="Enter Last Name"
                onChange={changeHandler}
                value={formData.lastName}
                name="lastName"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
            </label>
          </div>
  
          <label htmlFor="" className="w-full">
          <div className="mt-4"></div>
          
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address
              <sup className="text-pink-200">*</sup>
            </p>
  
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={formData.email}
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              name="email"
            />
          </label>
          
  
          <div className="flex gap-x-4 w-full mt-4">
            <label htmlFor= "" className="w-full relative">
            
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Create Password
                <sup className="text-pink-200">*</sup>
              </p>
  
              <input
                type={showCreatePass ? "text" : "password"}
                required
                placeholder="Enter Password"
                onChange={changeHandler}
                value={formData.password}
                name="password"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
              <span
                onClick={() => setshowCreatePass((prev)=>!prev)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {showCreatePass ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
  
            <label htmlFor="" className="w-full relative">
            
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                Confirm Password
                <sup className="text-pink-200">*</sup>
              </p>
  
              <input
                type={showConfirmPass ? "text" : "password"}
                required
                placeholder="Confirm Password"
                onChange={changeHandler}
                value={formData.confirmPassword}
                name="confirmPassword"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
              />
  
              <span
                onClick={() => setshowConfirmPass((prev)=>!prev)}
                className="absolute right-3 top-[38px] cursor-pointer z-10"
              >
                {showConfirmPass ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
  
          <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
            Create Account
          </button>
        </form>
      </div>
    );
}

export default Signupform
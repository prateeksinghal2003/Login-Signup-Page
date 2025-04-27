import React from "react"
import frame from "../assets/frame.jpg";
import SignupForm from "./Signupform.jsx";
import LoginForm from "./Loginform.jsx";
import { FcGoogle } from "react-icons/fc";

const Template=({ title, description1, description2, image, formType, setIsLoggedIn,setpasswordData , passwordData, setemail, email})=>
{
  //extracting title property from props object
    return(

        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">

        <div className="w-11/12 max-w-[450px] mx-0 text-white">

        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <p className="text-white">{description1}</p>
          {/* <p className="text-blue-100 italic">{description2}</p> */}
        </p>

      {/*== only check values
         === check values and types*/} 

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} setpasswordData={setpasswordData} passwordData={passwordData} setemail={setemail}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} setpasswordData={setpasswordData} passwordData={passwordData} email={email}/>}

         {/* this div is for -------------OR------------------- */}
        <div className="flex w-full items-center my-4 gap-x-2">
        <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frame}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"

        />
        <img
          src={image}
          alt="students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>

    )
}

export default Template

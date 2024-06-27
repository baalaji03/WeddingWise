import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux"
import { signInFailure, signInStart, signInSuccess } from "../Redux/Slice/userSlice";
import OAuth from "../Components/OAuth";



const Signin = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {loading , error:errorMessage} = useSelector((state)=>state.user)
 const navigate = useNavigate();
  const handleChange = (e) => {
    //console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    //console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( !formData.email || !formData.password){
        return dispatch(signInFailure(("please fill out the fields")));
    }
    try {
        dispatch(signInStart())
        const response = await fetch('http://localhost:5000/api/auth/login-user',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        const data = await response.json();
        if(data.success === false){
            return dispatch(signInFailure((data.message)))
        }
        if(response.ok){
            
            dispatch(signInSuccess(data))
            navigate('/');
        }
    } catch (error) {
        dispatch(signInFailure((error.message)))
    }
  };

  return (
    <div className="min-h-screen mt-50">
    <div>
      <div>
        <div className=" text-3xl font-semibold dark:text-white">
          <span className=" px-2 py-1 bg-gradient-to-r from bg-pink-600 via-purple-500 to from-indigo-600 text-transparent bg-clip-text">
            WeddingWise
          </span>
        </div>
        <p className="text-m mt-6">
          You can sign up with your Email and password or you can use
          Google.This is an Demo Project***.
        </p>
      </div>
    </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter Your Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
             {loading ? (
                <>
                <Spinner color="purple" aria-label="Purple spinner example" size='sm'/>
                <span className="pl-3">Loading...</span>
                </>
             ) : ( 
                'Sign In'
             )
            }
            </Button>
          <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-6">
            <span>Don't Have An Account ?</span>
            <Link to="/Signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">🥴OOPS!</span>{errorMessage}
          </Alert>
          )}
        </div>
      </div>
    
  );
};

export default Signin;
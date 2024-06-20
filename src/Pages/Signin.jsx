import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='min-h-screen mt-50'>
            <div>
                <div>
                    <div   className=' text-3xl font-semibold dark:text-white'>
          <span className=' px-2 py-1 bg-gradient-to-r from bg-pink-600 via-purple-500 to from-indigo-600 text-transparent bg-clip-text'>WeddingWise</span>
          

                    </div>
                    <p className='text-m mt-6'>
                        You can sign up with your Email and password or you can use Google.This is an Demo Project***.
                    </p>
                </div>
            </div>
            <br />
            <form className='flex flex-col gap-3'>
               <Label value='Username:' />
               <TextInput type='text' placeholder='Enter your username'/>
               <Label value='Email:' />
               <TextInput type='text' placeholder='Enter your E-mail'/>
               <Label value='Password:' />
               <TextInput type='text' placeholder='Enter your password'/>
               
               <Button gradientDuoTone="redToYellow" type='submit'>Sign up</Button>
               <div>
               <Link to='/Login'>
               <span> Have an account Already ???</span> <a className='font-semibold text-blue-700'>Login</a> 
               </Link>
               </div>
            </form>
        </div>
    );
};

export default Signin;
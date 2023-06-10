import React, { useState } from 'react';
import hide from '../assets/hide.png';
import eye from '../assets/eye.png';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://api.itaxeasy.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // console.log(data.token);
      if (data.results.data.userType === 'admin') {
        // Successful login
        setLoginError(false);
        // setIsAuthenticated(true);
        console.log('Logged in successfully!');
        localStorage.setItem("token",data.results.token)
        // localStorage.setItem("isAuthenticated",true)
        setEmail("");
        setPassword("");
        navigate('/showdoc');
      } else {
        // Failed login
        setLoginError(true);
        // setIsAuthenticated(false);
      }
    } else {
      // Failed login
      setLoginError(true);
      // setIsAuthenticated(false);
    }
  };


  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 pt-5 pb-10 px-4 rounded-md'>
        <h2 className='text-center text-[34px] pb-8 -text--clr-accent-400 font-bold'>Admin Login</h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
              Email
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={handleEmailChange}
                className='block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:rign-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-600'>
                Password
              </label>
              <div className='text-sm'>
                <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                  Forget password?
                </a>
              </div>
            </div>
            <div className='mt-2 relative'>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id='password'
                name='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={handlePasswordChange}
                className='block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:rign-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
              <button type='button' className='absolute top-2 right-2 text-gray-600' onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <img src={eye} alt='hide' className='w-[25px]' />
                ) : (
                  <img src={hide} alt='eye' className='w-[25px]' />
                )}
              </button>
            </div>
          </div>

          {loginError && <p className='text-red-500'>Invalid email or password.</p>}

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md -bg--clr-accent-400 px-3 py-1.5 text-sm font-semibold leading-6 -text--clr-neutral-100 shadow-sm hover:-bg--clr-accent-350 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

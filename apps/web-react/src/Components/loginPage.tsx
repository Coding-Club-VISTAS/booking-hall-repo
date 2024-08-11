import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import bg from '../assets/loginPage_bg_logo.png';
import logo from '../assets/loginPage_logo.png';
import appLogo from '../assets/loginPage_AppLogo.png';

const HallBookingApp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState('student');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginType(event.target.value);
  };

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-indigo-100 max-w-[480px]">
      <div className="flex justify-center flex-col items-center w-full bg-indigo-100 mt-[0.5vh]">
        <img src={bg} alt="LoginPage_BG" className="object-contain max-w-full h-[30vh]" />
        <div className="flex gap-5 w-full justify-between items-center mt-4 px-6">
          <img src={appLogo} alt="App-logo" className="h-[5vh] w-auto" />
          <img src={logo} alt="login-logo" className="h-[3vh] w-auto" />
        </div>
      </div>
      <main className="flex overflow-hidden flex-col px-6 pb-16 w-full text-sm text-black bg-indigo-100">
        <p className="mt-5 text-xs font-medium">
          The Hall Booking App for Vels University is designed to simplify the process of reserving university halls for various events and meetings.
        </p>
        <form className="mt-6">
          <div className="flex gap-5 w-full text-xs font-medium justify-between">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="studentLogin"
                name="loginType"
                value="student"
                checked={loginType === 'student'}
                onChange={handleLoginTypeChange}
                className="form-radio"
              />
              <label htmlFor="studentLogin">Student Login</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="staffLogin"
                name="loginType"
                value="staff"
                checked={loginType === 'staff'}
                onChange={handleLoginTypeChange}
                className="form-radio"
              />
              <label htmlFor="staffLogin">Staff Login</label>
            </div>
          </div>
          <input
            type="email"
            id="collegeEmail"
            placeholder="College Email ID"
            className="px-3.5 py-2.5 mt-6 w-full text-sm rounded-md bg-zinc-100 text-neutral-400"
            aria-label="College Email ID"
          />
          <div className="relative mt-6 w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="px-3.5 py-2.5 w-full text-sm rounded-md bg-zinc-100 text-neutral-400"
              aria-label="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3.5 py-2.5"
              aria-label={showPassword ? "Hide Password" : "Show Password"}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <button
            type="submit"
            className="px-16 py-4 mt-4 font-bold text-center text-white bg-indigo-600 rounded-xl w-full"
          >
            Get OTP
          </button>
        </form>
        <div className="flex gap-3.5 items-center mt-2.5 font-bold whitespace-nowrap">
          <div className="shrink-0 self-stretch my-auto h-px bg-stone-500 w-[39vw]" />
          <div className="self-stretch">or</div>
          <div className="shrink-0 self-stretch my-auto h-px bg-stone-500 w-[39vw]" />
        </div>
        <button className="flex gap-1.5 px-16 py-2.5 mt-3 mb-4 font-semibold bg-white rounded-xl w-full justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e96ab28e8d3a10e41ddbd5111164249bef19b3bf85ac80951c55ccd88a6ab4c?apiKey=067c5bb5a47e48ceb34000b3d7a35b79"
            alt="Google Logo"
            className="object-contain shrink-0 aspect-square w-[30px]"
          />
          <span className="my-auto">Login with Google</span>
        </button>
      </main>
      <footer className="flex flex-col items-center px-20 pt-3 pb-1 w-full bg-indigo-100">
        <div className="flex shrink-0 bg-stone-950 h-[5px] rounded-[100px] w-[134px]" />
      </footer>
    </div>
  );
};

export default HallBookingApp;

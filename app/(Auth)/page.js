'use client';
import SignUp from "../../Components/SignUp";
import Login from "../../Components/Login";
import Button from "../../Components/Button";
import { useState } from "react";

function Page() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full h-fit max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        {isLogin ? <Login /> : <SignUp />}
        <Button onClick={toggleForm} className="mt-6 w-full">
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </Button>
      </div>
    </div>
  );
}

export default Page;

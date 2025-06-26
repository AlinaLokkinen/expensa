import { useState } from "react";
import { Link } from "react-router";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  return (
    <div className="flex justify-center ">
      <div 
      className="flex flex-col 
      rounded-sm bg-green-100
      items-center 
      mt-55 md:mt-60 lg:mt-75 
      sm:1/4 lg:w-1/3 
      p-8 md:p-15 lg:p-15 ">
        <h2 className="text-2xl">Welcome!</h2>

        <form >
          <div className="m-5 flex flex-col items-center p-5">
            <p className="py-2 self-start">Email address</p>
            <input
              className="p-2 w-10/9 text-center "
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="mt-5 py-2 self-start">Password</p>
            <input
              className="p-2 w-10/9 text-center"
              type="password"
              placeholder="Password"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-emerald-600 text-white font-medium rounded-sm px-4 py-2 mt-5">Sign in</button>
          </div>
        </form>

        <p className="mt-5">
          Don't have an account yet?{" "}
          <Link className="underline text-green-700" to={"/signup"}>Sign up!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

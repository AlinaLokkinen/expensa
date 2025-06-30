import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/overview");
      }
    } catch (error) {
      setError("An error occurred!");
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center ">
      <div
        className="flex flex-col 
      rounded-sm bg-green-100
      items-center 
      mt-55 md:mt-60 lg:mt-75 
      sm:1/4 lg:w-1/3 
      p-8 md:p-15 lg:p-15 "
      >
        <h2 className="text-2xl">Welcome!</h2>
        <p className="w-2/3 text-center mt-5">
          Fill in the fields below and start mastering your finances!
        </p>

        <form onSubmit={handleSignUp}>
          <input type="hidden" value="prayer" />

          <div className="m-5 flex flex-col items-center p-5">
            <p className="py-2 self-start">Email address</p>
            <input
              autoComplete="new-password"
              className="p-2 w-10/9 text-center bg-green-50 rounded-sm"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="mt-5 py-2 self-start">Password</p>
            <input
              autoComplete="new-password"
              className="p-2 w-10/9 text-center bg-green-50 rounded-sm"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 text-white font-medium rounded-sm px-4 py-2 mt-5"
            >
              Sign up
            </button>
            {error && <p className="mt-5 font-bold">{error}</p>}
          </div>
        </form>
        <p className="">
          Already have an account?{" "}
          <Link className="underline text-green-700" to={"/login"}>
            Sign in!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

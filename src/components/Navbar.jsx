import { Link, useLocation, useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { signOutUser } = UserAuth();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOutUser();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup" ? (
        <div className=" bg-green-100 fixed top-0 left-0 flex flex-row w-full justify-between items-center h-1/9 rounded-lg z-10">
          <div>
            <h1 className="font-bold ml-15 text-2xl">
              <a href="/">Expensa</a>
            </h1>
          </div>

          <div>
            <button
              onClick={() => navigate("/login")}
              className="bg-emerald-600 text-white font-medium py-3 px-5 rounded-sm mr-15"
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <div className=" bg-green-100 fixed top-0 left-0 flex flex-row w-full justify-between items-center h-1/9 rounded-lg z-10">
          <div>
            <h1 className="font-bold ml-15 text-2xl">
              <a href="/">Expensa</a>
            </h1>
          </div>
          <div className=" flex flex-row font-bold mr-5 gap-5">
            <Link to={"/overview"}>Overview</Link>
            <Link to={"/expenses"}>Expenses</Link>
            <Link to={"/income"}>Income</Link>
            <Link to={"/budgets"}>Budgets</Link>
            <Link to={"/savings"}>Savings</Link>
            <button className="hover:cursor-pointer" onClick={handleSignOut}>Log out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

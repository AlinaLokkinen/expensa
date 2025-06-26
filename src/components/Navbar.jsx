import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
    const navigate = useNavigate();

  return (
    <div>
      {(location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup"  )? (
        <div className=" bg-green-100 fixed top-0 left-0 flex flex-row w-full justify-between items-center h-1/9 rounded-lg">
          <div>
            <h1 className="font-bold ml-15 text-2xl"><a href="/">Expensa</a></h1>
          </div>
          

          <div>
            <button 
            onClick={() => navigate("/login")}
            className="bg-emerald-600 text-white font-medium py-3 px-5 rounded-sm mr-15">
              Get Started
            </button>
          </div>
          </div>

      ) : (
        <div className=" bg-green-100 fixed top-0 left-0 flex flex-row w-full justify-between items-center h-1/9 rounded-lg">
            <div>
                <h1 className="font-bold ml-15 text-2xl"><a href="/">Expensa</a></h1>
            </div>
            <div className=" flex flex-row font-bold mr-5">
                <p className="mx-5">Overview</p>
                <p className="mx-5">Expenses</p>
                <p className="mx-5">Income</p>
                <p className="mx-5">Budgets</p>
                <p className="mx-5">Savings</p>
            </div>
</div>
      )}
    </div>
  );
};

export default Navbar;

import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row content-center mt-75 justify-center">
      
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-left ">Master your budget</h1>
        <p className="mt-10 text-xl text-left w-3/4">Track your income and expenses and master your finances</p>
        <button 
        onClick={() => navigate("/login")}
        className="bg-emerald-600 text-white font-medium w-1/3 py-3 px-5 rounded-sm ml-15 my-5">
          Get Started
        </button>
      </div>

      <div>
        <img src="/piggy.png" alt="a piggy bank" />
      </div>
    </div>
  );
};

export default Home;

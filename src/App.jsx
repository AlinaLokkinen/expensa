import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/Authcontext";
import Overview from "./components/Overview";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Budgets from "./components/Budgets";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
            <Route path="/budgets" element={<Budgets />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;

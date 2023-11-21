import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import SignUp from "../../pages/signUp";
import Dashboard from "../../pages/accountInfo";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/account-info" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

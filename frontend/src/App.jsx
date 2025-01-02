import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CreateAccount from "./Pages/CreateAccount";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

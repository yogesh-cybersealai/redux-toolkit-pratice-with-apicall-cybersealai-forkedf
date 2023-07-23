import "./App.css";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import UpdateUser from "./components/UpdateUser";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
        <Route index element={<Home />} />
        <Route exact path="/create-user" element={<CreateUser />} />
        <Route exact path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

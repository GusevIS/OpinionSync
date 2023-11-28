import logo from "./logo.svg";
import "./App.css";
import Layout from "./UI/layout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Componenty/home";
import Login from "./Componenty/login";

function App() {
  return (
    <Router>
      <div className="flex justify-center ">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/rooms" element={<Login />} />
            <Route path="/createRoom" element={<Login />} />
            <Route path="/description" element={<Login />} />
            <Route path="/registration" element={<Login />} />
            <Route path="/account" element={<Login />} />
            <Route path="/questions" element={<Login />} />
            <Route path="/discussion" element={<Login />} />
            <Route path="/results" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

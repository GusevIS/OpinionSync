import "./App.css";
import Layout from "./UI/layout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import Description from "./Components/description";
import Footer from "./UI/footer";
import Account from "./Components/account";
import Registration from "./Components/registration";
import Rooms from "./Components/rooms";

function App() {
  return (
    <Router>
      <div className="app-global">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/createRoom" element={<Login />} />
            <Route path="/description" element={<Description />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/account" element={<Account />} />
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

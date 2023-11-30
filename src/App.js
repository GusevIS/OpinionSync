import "./App.css";
import Layout from "./UI/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import Account from "./Components/account";
import Description from "./Components/description";
import Registration from "./Components/registration";
import Rooms from "./Components/rooms";
import Questions from "./Components/questions";
import CreateRoom from "./Components/createRoom";

function App() {
  return (
    <Router>
      <div className="flex justify-center min-h-screen">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/createRoom" element={<CreateRoom />} />
            <Route path="/description" element={<Description />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/account" element={<Account />} />
            <Route path="/questions" element={<Questions />} />
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

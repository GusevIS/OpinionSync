import Layout from "./UI/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/login";
import Description from "./Components/description";
import Account from "./Components/account";
import Registration from "./Components/registration";
import Rooms from "./Components/rooms";
import Questions from "./Components/questions";
import CreateRoom from "./Components/createRoom";
import ScrollPage from "./Components/scrollPage";
import Results from "./Components/results";

function App() {
  return (
    <Router>
      <div className="app-global">
        <Layout>
          <Routes>
            <Route exact path="/" element={<ScrollPage />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/createRoom" element={<CreateRoom />} />
            <Route path="/description" element={<Description />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/account" element={<Account />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/discussion" element={<Login />} />
            <Route path="/results" element={<Results />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

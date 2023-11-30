import { Link } from "react-router-dom";
import Button from "../UI/button";
import "../App.css";
import PrimaryButtons from "./buttons/primaryButton";

const Home = () => {
    const linkStyle = {
        textDecoration: 'none', // Убираем подчеркивание у ссылки
        color: 'inherit', // Сохраняем цвет текста по умолчанию
    };
  return (
    <div className="App">
      <h1 className="font-h1 pt-10">
        OpinionSync
      </h1>
      <div class="mt-20 flex flex-col items-center gap-4">
          <PrimaryButtons buttonText="Vytvořit novou místnost" to="createRoom" customWidth="416px" customHeight="64px">
              {}
          </PrimaryButtons>
          <PrimaryButtons buttonText="Navštívit místnosti" to="rooms" customWidth="416px" customHeight="64px">
              {}
          </PrimaryButtons>
        <h2 class="default-text mt-16 ">
          <Link to="/description" style={linkStyle}>Jak to celé funguje?</Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;

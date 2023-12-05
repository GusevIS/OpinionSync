import { Link } from "react-router-dom";
import Button from "../UI/button";
import "../App.css";
import PrimaryButtons from "./buttons/primaryButton";
import TextButtons from "./buttons/textButton";
import React from "react";

const Home = ({ scrollToDescPage }) => {
  const linkStyle = {
    textDecoration: "none", // Убираем подчеркивание у ссылки
    color: "inherit", // Сохраняем цвет текста по умолчанию
  };
  return (
    <div className="flex items-center flex-col w-[425px] sm:w-full">
      <h1 className="text-5xl sm:font-h1 py-2">OpinionSync</h1>
      <div class="mt-20 gap-4 mx-20 flex flex-col">
        <PrimaryButtons
          buttonText="Vytvořit novou místnost"
          to="createRoom"
          className="w-[370px] sm:w-96"
          customHeight="64px"
        >
          {}
        </PrimaryButtons>
        <PrimaryButtons
          buttonText="Navštívit místnosti"
          to="rooms"
          className="w-[370px] sm:w-96"
          customHeight="64px"
        >
          {}
        </PrimaryButtons>

        <TextButtons
          buttonText="Jak to celé funguje?"
          onClick={scrollToDescPage}
          my-25
        >
          {}
        </TextButtons>
      </div>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import Button from "../UI/button";
import "../App.css";
import PrimaryButtons from "./buttons/primaryButton";
import TextButtons from "./buttons/textButton";
import React, { useRef } from 'react';

const Home = ({ scrollToDescPage }) => {
    const linkStyle = {
        textDecoration: 'none', // Убираем подчеркивание у ссылки
        color: 'inherit', // Сохраняем цвет текста по умолчанию
    };
  return (
    <div className="App pb-40">
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

          <TextButtons buttonText="Jak to celé funguje?" onClick={scrollToDescPage} my-25>
              {}
          </TextButtons>
      </div>
    </div>
  );
};

export default Home;

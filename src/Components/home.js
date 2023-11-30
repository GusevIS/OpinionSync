import { Link } from "react-router-dom";
import Button from "../UI/button";

const Home = () => {
  return (
    <div>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        OpinionSync
      </h1>
      <div class="mt-28 flex flex-col items-center gap-4">
        <Button to="/questions" className="w-52">
          Vytvořit novou místnost
        </Button>
        <Button to="/rooms" className="w-52 ">
          Navštívit místnosti
        </Button>
        <h2 class="mt-5 text-lg font-extrabold leading-none tracking-tight text-gray-900  dark:text-white ">
          <Link to="/description">Jak to celé funguje?</Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;

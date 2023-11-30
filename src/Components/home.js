import { Link } from "react-router-dom";
import Button from "../UI/button";
import Card from "../UI/card";

const Home = () => {
  return (
    <div>
      <Card>
        <div class="mt-8 flex flex-col items-center gap-4">
          <Button to="/createRoom" className="w-56 ">
            Vytvořit novou místnost
          </Button>
          <Button to="/rooms" className="w-56 ">
            Navštívit místnosti
          </Button>
          <h2 class="mt-5 text-lg font-extrabold leading-none tracking-tight text-gray-900  dark:text-white ">
            <Link to="/description">Jak to celé funguje?</Link>
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default Home;

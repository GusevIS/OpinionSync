import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        OpinionSync
      </h1>
      <div class="mt-28 flex flex-col items-center gap-4">
        <a href="">
          <button class="bg-blue-500  h-16 w-64 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Vytvořit novou místnost
          </button>
        </a>
        <a href="b.html">
          <button class="bg-blue-500  h-16 w-64 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Navštívit místnosti
          </button>
        </a>
        <h2 class="mt-5 text-lg font-extrabold leading-none tracking-tight text-gray-900  dark:text-white ">
          Jak to celé funguje
        </h2>
      </div>
    </div>
  );
};

export default Home;

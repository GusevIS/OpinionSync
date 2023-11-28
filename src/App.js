import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div class="flex flex-col items-center justify-center w-full sm:w-1/2 h-screen bg-orange-400">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          OpinionSync
        </h1>
        <div class="mt-8">
          <a href="a.html">
            <button class="bg-blue-500 mr-3 h-16 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              a Page
            </button>
          </a>
          <a href="b.html">
            <button class="bg-blue-500 ml-3 h-16 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              b Page
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

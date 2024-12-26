import { useState } from "react";


function App() {
  const [color,setColor] = useState('olive')
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="flex justify-center align-baseline w-full relative p-0 text-center h-screen"
      >
        <div className="contaner py-3 px-8 w-3/4 h-24  shadow-2xl bottom-0 rounded bg-white fixed flex flex-wrap  justify-center align-baseline">
          <button
            onClick={() => setColor("red")}
            className="outline-none m-1 w-20 bg-red-500 border rounded-full duration-500 transition-all  px-2 py-1"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none m-1 w-20 bg-green-700 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none m-1 w-20 bg-blue-600 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#4c1d95")}
            className="outline-none m-1 w-20 bg-violet-900 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Violet
          </button>
          <button
            onClick={() =>
              setColor(" rgb(192 132 252 / var(--tw-bg-opacity, 1)")
            }
            className="outline-none m-1 w-20 bg-purple-400 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("#4b5573 ")}
            className="outline-none m-1 w-20 bg-gray-600 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Gray
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none m-1 w-20 bg-yellow-600 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none m-1 w-20 bg-pink-700 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none m-1 w-20 bg-purple-600 border rounded-full duration-200 transition-all  px-2 py-1"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none m-1 w-20 bg-white border rounded-full duration-200 transition-all  px-2 py-1"
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none m-1 w-20 bg-black border text-white rounded-full duration-200 transition-all  px-2 py-1"
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App

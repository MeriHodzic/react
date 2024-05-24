import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./assets/components/Card/Card";

// function App() {
//   const [count, setCount] = useState(0);

//   const osoba = {
//     name: "Jakub",
//     age: 17,
//   };
// }
//destructuring objekta
// const { name } = osoba;
// console.log(name);
//cemu je jednako name? NAME === OSOBA.NAME

//destructuring niza
// const osobaNiz = ["Kanita", 19];
// const [ime] = osobaNiz; //vrednosti u nizu su 0,1,2,.. i uzece prvu vrednost koji god naziv dodelimo
// console.log(ime);

const App = () => {
  return (
    <div>
      <h1>Hotel</h1>

      <Card
        title="KAYAK"
        content={
          <>
            $174 <del>$369</del>
          </>
        }
        text="per night"
        total="total $450"
      />
    </div>
  );
};

export default App;
// return (
<>
  {/* <Greeting appName="Lyntel" fullName="Merjem Hodzic" /> */}

  <div>
    {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
    {/* <h1>Merjem Hodzic</h1> */}
  </div>
  {/* <h1>Vite + React</h1> */}
  {/* <div className="card"> */}
  {/* <button onClick={() => setCount((count) => count + 1)}> */}
  {/* count is {count} */}
  {/* </button> */}
  <p>{/* Edit <code>src/App.jsx</code> and save to test HMR */}</p>
  {/* </div> */}
  {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more */}
  {/* </p> */}
</>;
{
  /* ); */
}

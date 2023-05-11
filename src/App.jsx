import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import People from "./Components/People";
import Planets from "./Components/Planets";

function App() {
  const [page, setPage] = useState("Planets");

  return (
    <>
      <h1>Star wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="contents">
        {page === "planets" ? <Planets></Planets> : <People></People>}
      </div>
    </>
  );
}

export default App;

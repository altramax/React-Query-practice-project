import { useQuery } from "@tanstack/react-query";
import Planet from "./Planet";

const fectchData = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

export default function Planets() {
  //  two aguements 1, Planets 2, async function that does the fetch
  const { data, status } = useQuery(["planets"], fectchData);

  return (
    <>
      <h1>Planet component</h1>
      {status === "error" && <div>Error Fetching data</div>}
      {status === "loading" && <div>Loading data</div>}
      {status === "success" && <Planet responce={data}/>
}
    </>
  );
}

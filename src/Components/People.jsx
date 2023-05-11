import { useQuery } from "@tanstack/react-query";
import Person from "./Person";

const fectchData = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

export default function People() {
    const { data, status } = useQuery( ["people"], fectchData);
    return (
        <>
          <h1>People component</h1>
          {status === "error" && <div>Error Fetching data</div>}
          {status === "loading" && <div>Loading data</div>}
          {status === "success" && <Person responce={data}/>
    }
        </>
      );
}

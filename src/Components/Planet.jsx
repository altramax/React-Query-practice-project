
export default function Planet({responce}) {
  return (
    <>{
       responce.results.map((res) => {
          return (
            <div key={res.name} className="card">
              <h3>{res.name}</h3>
              <p>Population - {res.population}</p>
              <p>Terrain - {res.terrain}</p>
            </div>
          );
        })
    }
    </>
  );
}

export default function Person({responce}) {
    return (
      <>{
         responce.results.map((res) => {
            return (
              <div key={res.name} className="card">
                <h3>{res.name}</h3>
                <p>Gender - {res.gender}</p>
                <p>Birth year - {res.birth_year}</p>
              </div>
            );
          })
      }
      </>
    );
  }
  
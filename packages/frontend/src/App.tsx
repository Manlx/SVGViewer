import { useEffect, useState } from "react"
import { IconDisplay } from "./components/IconDisplay"

function App() {

  const [svgs, setSvgs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError ] = useState(false);

  useEffect(()=>{

    setLoading(true);

    fetch("http://localhost:1337/svgs", {
      method: "GET",
      redirect: "follow"
    })
    .then((response) => response.json())
    .then((result) => {

      setSvgs(result);
      setLoading(false);
    })
    .catch((error) => {

      console.error(error)

      setError(true);
    });

  },[]);

  if (error) {

    return (
      <h1>Error encountered while fecthing SVGs</h1>
    );
  }

  if (loading) {

    return (
      <h1>Loading SVGs...</h1>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap:"wrap",
        gap:"2rem",
        alignItems:"center",
        justifyContent:"center"
      }}>
      {
        svgs.map((svg, index) => (

          <IconDisplay 
            key={index} 
            svgName={svg} />
        ))
      }
    </div>
  )
}

export default App

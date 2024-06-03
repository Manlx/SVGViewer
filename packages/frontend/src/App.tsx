import { useEffect, useState } from "react"
import { IconHolder } from "./components/IconHolder";
import { IconHolderColorPicker } from "./components/IconHolderColorPicker";

function App() {

  const [svgs, setSvgs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError ] = useState(false);
  
  const [iconDisplayBackground, setIconDisplayBackground] = useState("#e5c3a2");
  const [iconDisplaySVGBackground, setIconDisplaySVGBackground] = useState("#88d7cf");
  const [iconDisplayTextBackground, setIconDisplayTextBackground] = useState("#0a556c");

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
    <div>
      <IconHolder
        bodyColor={iconDisplayBackground}
        svgColor={iconDisplaySVGBackground}
        textColor={iconDisplayTextBackground}
        svgs={svgs}/>

      <IconHolderColorPicker 
        setColorArr={[
          setIconDisplayBackground,
          setIconDisplaySVGBackground,
          setIconDisplayTextBackground
        ]} 
        colorValues={[
          iconDisplayBackground,
          iconDisplaySVGBackground,
          iconDisplayTextBackground
        ]}
        setColorDescriptionArr={[
          "Display Background: ",
          "Display SVG Background: ",
          "Display SVG Text Background: "
        ]} />
    </div>
  )
}

export default App

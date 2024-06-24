import { useEffect, useState } from "react";

const App = () => {
  const [chimis, setChimis] = useState([]);

  useEffect(() => {
    const fetchChimis = async () => {
      const result = await fetch("/api/chimichangas");
      const data = await result.json();
      setChimis(data);
    }
    fetchChimis();
  }, []);

  return (
   <ul>
    {chimis.map(chimi => {
      return <li>{chimi.name} ${chimi.price}.00</li>
    })}
   </ul>
  
  ); 
}

export default App;

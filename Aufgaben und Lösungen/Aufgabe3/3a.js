import { useState } from "react";
const Witze = () => {
    const [witz,setWitz] = useState("");
    const witze = ['witz1','witz2','witz3','witz4','witz5']
    return (
      <div>
        <button onClick={() => {
            setWitz(() => witze[Math.floor(Math.random()*5)])
            }}>Witz</button>
           <h1>{witz}</h1>
      </div>
    )
    }
export default Witze
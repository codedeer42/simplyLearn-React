import { useState } from "react";
const Witze = () => {
    const [witz,setWitz] = useState("");
    const witze = [
        "Warum mögen Programmierer keine Natur? - Weil sie zu viele Bugs hat!",
        "Was ist der liebste Tag eines Programmierers? - 'Frei'-tag!",
        "Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? - Keine Ahnung, das ist ein Hardware-Problem!",
        "Warum lieben Programmierer die Natur? - Weil es dort keinen Kabelsalat gibt!",
        "Was sagt ein Informatiker, wenn er durch die Wand will? - Open Sesame!"
      ];
      
      const witzeEng = [
        "Why do programmers dislike nature? - Because it has too many bugs!",
        "What's a programmer's favorite day? - 'Fri'-day!",
        "How many programmers does it take to change a lightbulb? - I don't know, that's a hardware problem!",
        "Why do programmers love nature? - Because there's no spaghetti code out there!",
        "What does a computer scientist say when he wants to go through the wall? - Open Sesame!"
      ];
    
    const handleWitze = (e) => {
        const sprache = e.target.closest("button").innerText;
        if (sprache === 'Deutsch'){
            setWitz(() => witze[Math.floor(Math.random() * witze.length)])
        } else if(sprache === 'Englisch'){
            setWitz(() => witzeEng[Math.floor(Math.random() * witzeEng.length)])
        } else {
            setWitz(() => 'Witz kom raus.')
        }
    }


    return (
      <div>
            <button onClick={ handleWitze}>Witz</button>
           <h1>{witz}</h1>
           <button onClick={handleWitze}>Deutsch</button>
           <button onClick={handleWitze}>Englisch</button>
      </div>
    )
    }
export default Witze
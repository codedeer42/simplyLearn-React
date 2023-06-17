//src/components/FuComponent.js
function FuComponent(){
    return <h1>ICH BIN EIN functional component}</h1>
}

export default Hello;


//src/App.js
import FuComponent from './components/FuComponent';

function App() {
  return (
    <div className="App">
      <FuComponent/> 
    </div>   
  );
}

export default App;
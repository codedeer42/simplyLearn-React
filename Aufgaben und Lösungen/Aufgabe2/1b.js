//src/components/ClassComponent.js
import {Component} from "react";

class ClassComponent extends Component{
    render(){
       return <h2>ICH BIN EIN class component</h2>
    }
}

export default ClassComponent



//src/App.js
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent/> 
    </div>   
  );
}

export default App;
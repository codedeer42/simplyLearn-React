const Header = ({title,name}) => {
  const isLogin = true;
  return (
    <>
    <h1>{title}</h1>
    <h1>{isLogin ? "Willkomen " + name : "Bitte einloggen"}</h1>
    </>
  )
}

export default Header
/*
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
         <Header title="Überschrift" name="Peter"/>
    </div>
  );
}
*/

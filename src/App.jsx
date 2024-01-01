import './App.css';
import Card from './components/Card';
import vehicles from "./data/vehicles1.js";
import Listar from "./components/Listar";
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {

  const vlista=vehicles.map(v => {
    return <Card title={v.nombre} description={v.description}/>
  })

  return (
    <>
     
          <div className="wrapper">
          <Header></Header>
          <Main></Main>
          </div>
    </>
  )
}

export default App

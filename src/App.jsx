import './App.css';
import Card from './components/Card';
import vehicles from "./data/vehicles1.js";
import Listar from "./components/Listar";

function App() {

  const vlista=vehicles.map(v => {
    return <Card title={v.nombre} description={v.description}/>
  })

  return (
    <>
      <div className="app">
        <h3>hola react minuto 23 estados, actualizado para crud de develoteca</h3>
        <p>https://www.youtube.com/watch?v=_DJBFUIT2Kg</p>
        <div className='container'>
          {vlista}
          <p>parte del crud</p>
          <Listar></Listar>
        </div>
      </div>
    </>
  )
}

export default App

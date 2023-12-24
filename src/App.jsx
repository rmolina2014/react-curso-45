import './App.css';
import Card from './components/Card';
import vehicles from "./data/vehicles1.js";

function App() {

  const vlista=vehicles.map(v => {
    return <Card title={v.nombre} description={v.description}/>
  })

  return (
    <>
      <div className="app">
        <h1>hola react minuto 23 estados</h1>
        <div className='container'>
          {vlista}
        </div>
      </div>
    </>
  )
}

export default App

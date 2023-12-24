
import "./Card.css";

function Card({title="titulo" ,descripcion="descr"}) {
  return (
    <div className='Card'>
      <h2>{title}</h2>
      <p>{descripcion}</p>
    </div>
  )
}

export default Card
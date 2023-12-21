import "./Content.css";
import { BASE_URL } from './App'

const Content = ({ data }) => {
  return (
    <div className="content">
    <div className="card-container">
      {data?.map((value, index) => (
       <div 
       key={value.name}
       className="foodCard">
        <div className="foodItem">
        <img src={BASE_URL + value.image} alt=""/>
        <div className="food-desc">
        <h3>{value.name}</h3>
        <p>{value.text}</p>
        </div>
        </div>
        <button
        className="price-btn"
        >$ {value.price}.00</button>
       </div>
      ))}
    </div>
  </div>
  )
}

export default Content
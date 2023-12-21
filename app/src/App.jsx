import { useEffect, useState } from "react"
import "./App.css"
import Content from "./Content";

export const BASE_URL = "http://localhost:9000"

const App = () => {

  const [data, setData] = useState(null);
  const [searchItem, setSearchItem] = useState(null);
  const [btnSelected, setSelectedBtn] = useState("all");


  const btnAll = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    }
  ]


  useEffect(() => {
    const fetchFoodData = async () => {

      try {
        const response = await fetch(BASE_URL);
        const foodData =  await response.json();
        setData(foodData);
        setSearchItem(foodData)   
  
      } catch (error) {
        console.log("error fetching data");
      }
    }
    fetchFoodData();
  }, [])
  

  const searchFood = (e) => {
    const searchValue = e.target.value;

    const filterFood = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    setSearchItem(filterFood);
  }


  const filterByBtn = (type) => {
    if(type === "all"){
      setSearchItem(data)
      setSelectedBtn("all")
      return
    }

    const filterFood = data?.filter((food) => 
    food.type.toLowerCase().includes(type.toLowerCase())
  )

  setSearchItem(filterFood)
  setSelectedBtn(type)
  }
 
 
 

  return (
    <div className='mainContainer'>
      <div className="headerContainer">
        <div className="logo-search-container">
          <div className="logo">
            <img src="../assets/Logo.svg" alt="logo" />
          </div>

          <div className="search-bar">
            <input 
            onChange={searchFood}
            type="text" 
            placeholder='Search...'/>
          </div>
        </div>

        <div className="buttons">

          {btnAll.map((btn) => (
              <button
              key={btn.name}
              onClick={() => filterByBtn(btn.type)}
              >{btn.name}</button>
          ))}
        </div>
      </div>

      <Content 
      data={searchItem}
      />
    </div>
  )
}

export default App
import { RouterProvider } from "react-router-dom"
import router from "./router"
import ProductContext from "./contexts/ProductContext"
import { useState } from "react"


function App() {
const [category,setCategory] = useState('')
const [name,setName] = useState('')
const [description,setDescription] = useState('')
const [price,setPrice] = useState('')
const [quantity,setQuantity] = useState('')

  return (
    <ProductContext.Provider value ={{name,setName,price,setPrice,quantity,setQuantity,category,setCategory,description,setDescription}}>
    <RouterProvider router={router}/>
    </ProductContext.Provider>
  )
}

export default App

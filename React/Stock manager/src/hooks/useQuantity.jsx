import { useState } from "react";

export default function useQuantity(){
const [quantity,setQuantity] = useState(0)

return{quantity,setQuantity}
}
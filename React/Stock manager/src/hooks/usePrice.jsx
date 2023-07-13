import { useState } from "react";

export default function usePrice(){
const [price,setPrice] = useState(0)

return{price,setPrice}
}
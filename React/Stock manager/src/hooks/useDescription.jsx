import { useState } from "react";

export default function useDescription(){
const [description,setDescription] = useState('')

return{description,setDescription}
}
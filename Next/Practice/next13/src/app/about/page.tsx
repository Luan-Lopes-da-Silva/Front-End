import { Metadata } from "next"
export const metadata: Metadata={
  title:'About'  
}
export default function About(){
return(  
<>
  <link rel="icon" href="./favicon.ico" sizes="any" />
  <h1>About</h1>
  <h2>Bellow</h2>
</> 
) 
}
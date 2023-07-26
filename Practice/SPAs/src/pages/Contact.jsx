export default function Contact(){
  return(
  <form>
  <label htmlFor="name" style={{display:'block',marginBottom:'2px'}}>Nome</label>
  <input type="text" id="name"/>
  <label htmlFor="email" style={{display:'block',marginBottom:'2px'}}>Email</label>
  <input type="text" id="email"/>
  <label htmlFor="message" style={{display:'block',marginBottom:'2px'}}>Mensagem</label>
  <textarea id="message" cols="30" rows="10">
  </textarea>  
  </form>  
  )
}
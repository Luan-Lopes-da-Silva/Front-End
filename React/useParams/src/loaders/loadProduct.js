import products from '../database.json'

export function loadProduct({params}){
  const product = products.find(p => p.id === +params.productId)

  if(!product){
    throw new Response("Oops... Esse produto não foi encontrado =(", { status: 600 })
  }
  return product
}
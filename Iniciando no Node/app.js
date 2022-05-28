const express = require ("express");
const { randomUUID} = require("crypto");
const res = require("express/lib/response");
const req = require("express/lib/request");
const fs = require("fs")

const app = express();

app.use(express.json());

let products = [] ;

fs.readFile("products.json", "utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
     products = JSON.parse(data);   
    }
})

/** 
 * POST => Inserir um dado
 * GET => Buscar um ou mais dados
 * PUT => Alterar um dado
 * DELETE => Remover um dado
*/

/**
 * BODY => Sempre que eu quiser enviar dados para a minha aplicação
 * PARAMS => /product/25148961889189189
 * QUERY => /product?id=25148961889189189&value=25148961889189189
 */

app.post("/products" , (request, response) =>{
//Nome e Preço => name e price
const {name, price} = request.body;

const product = {
    name,
    price,
    id : randomUUID()
}

products.push(product);

fs.writeFile("products.json", JSON.stringify(products), (err)=>{
if (err){
 console.log (err)   
}else{
 console.log("Produto inserido")    
}    
})

return response.json (product);    

})

app.get("/products", (request, response) => {
    return response.json(products);    
});

app.get("/products/:id", (request, response) =>{
 const {id} = request.params;
 const product = products.find (product => product.id === id);   
 return response.json (product);
}),

app.put("/products/:id", (request, response)=>{
    const {id} = request.params;
    const {name, price} = request.body;
    
    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] ={
     ...products[productIndex],
     name,
     price   
    }
    ProductFile();
    return response.json({message: "Produto alterado com sucesso"});
})

app.delete("/products/:id", (request, response)=>{
    const {id} = request.params;
    const productIndex = products.findIndex(product => product.id === id);
    products.splice(productIndex, 1)
    ProductFile()
    return response.json({message:"Produto excluido com sucesso"})
})

function ProductFile(){
    fs.writeFile("products.json", JSON.stringify(products), (err)=>{
        if (err){
         console.log (err)   
        }else{
         console.log("Produto inserido")    
        }    
        })
}

app.listen(4002, () => console.log( "Servidor esta rodando na porta 4002"));



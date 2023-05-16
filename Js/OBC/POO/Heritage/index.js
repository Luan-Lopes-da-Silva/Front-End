class Property{
  constructor(area,price){
    this.area = area
    this.price = price
  }
  getPricePerMeters(){
    return this.price / this.area
  }
}

class House extends Property{
  constructor(area,price,number,garage){
    super(area,price)
    this.number = number
    this.garage = garage
  }
  haveAGarage(){
    if(this.garage==='Yes' || this.garage === 'yes'){
      return 'This house have a garage'
    }else{
      return 'This house don´t have a garage'
    }
  }
}
const property = new Property(220,1000)
console.log(property.getPricePerMeters())
const house = new House(1000,200000,140,'No')
console.log(house.haveAGarage())

class Apartment extends House{
  constructor(area,price,number,garage,floor){
    super(area,price,number,garage)
    this.floor = floor
  }
}

const apartment = new Apartment(100,50000,24,'Yes',12)
console.log(apartment)
console.log(apartment.getPricePerMeters())


class Address{
  constructor(street,number,neighborhood,city,state){
    this.street = street
    this.number = number
    this.neighborhood = neighborhood
    this.city = city
    this.state = state
  }
  fullAddress(){
    return `Street ${this.street} number ${this.number}. Neighborhood ${this.neighborhood} city ${this.city} state ${this.state} `
  }
}

module.exports = Address
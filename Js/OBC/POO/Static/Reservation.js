class Reservation{
  constructor(guests, room, days){
    this.guests = guests
    this.room = room
    this.days = days
    this.total = days * Reservation.baseFee
  }

  static baseFee = 150

  static showBase(){
    console.log(`The base fee is ${Reservation.baseFee}`)
  }
  static get premiumBaseFee(){
    return Reservation.baseFee * 1.5
  }
}


Reservation.showBase()
console.log(`Premium base fee is ${Reservation.premiumBaseFee}`)
const r1 = new Reservation(2,'201', 6)
console.log(r1)
Reservation.baseFee = 200
console.log(`Premium base fee is ${Reservation.premiumBaseFee}`)




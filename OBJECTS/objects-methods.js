//A method is property of an object whose value is a funtion

let restaurant = {
 name: 'ASB',
 guestCapacity: 75,
 guestCount: 0,
 checkAvailability: function (partySize) {
  let seatsLeft = this.guestCapacity - this.guestCount
  return partySize <= seatsLeft
 },
 seatParty: function (partySize) {
  return this.guestCount += partySize
 },
 removeParty: function (partySize) {
  return this.guestCount -= partySize
 }
};
//seatParty


restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(4)
console.log(restaurant.checkAvailability(4))

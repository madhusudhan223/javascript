function createAdress(street, city, postal) {
  return {
    street,
    city,
    postal,
  };
}
function Adress(street, city, postal) {
  this.street = street;
  this.city = city;
  this.postal = postal;
}
console.log(createAdress("vedha ", "kurnool", "123"));
const addr = new Adress("vedha ", "kurnool", "123");
console.log(addr);

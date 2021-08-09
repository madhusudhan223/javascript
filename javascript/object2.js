function Adress(street, city, postal) {
  this.street = street;
  this.city = city;
  this.postal = postal;
}

function areEqual(adr1, adr2) {
  return (
    adr1.street === adr2.street &&
    adr1.city === adr2.city &&
    adr1.postal === adr2.postal
  );
}
function isSame(adr1, adr2) {
  return adr1 === adr2;
}
const addr1 = new Adress("vedha ", "kurnool", "123");
const addr2 = new Adress("vedha ", "kurnool", "123");
const addr3 = addr1;
console.log(areEqual(addr1, addr2));
console.log(isSame(addr1, addr2));
console.log(isSame(addr1, addr3));

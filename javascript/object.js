const adress = {
  street: "vedha street",
  city: "kurnool",
  postal: 518468,
};
function showAdress(adress) {
  for (let key in adress) {
    console.log(key, adress[key]);
  }
}
showAdress(adress);

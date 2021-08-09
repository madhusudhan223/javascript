function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}
const movie = { title: "a", releaseyear: 1994 };
showProperties(movie);

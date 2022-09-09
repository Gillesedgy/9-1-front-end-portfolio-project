// const userInp = input
// const Base_URL = "www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

// fetch(Base_URL)
//   .then((res) => res.json())
//   .then((resJson) => console.log(resJson))
//   .catch((err) => console.log(err));

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b5b93f8d91mshbf7752d57342d87p1ff623jsn8aa205648c63",
//     "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
//   },
// };

// fetch("https://calorieninjas.p.rapidapi.com/v1/nutrition?query=pizza", options)
//   .then((response) => response.json())
//   .then((resjson) => {
//     console.log(resjson);

//     console.log(resjson.items[0].name);
//     console.log(resjson.items[0].calories);
//     console.log(resjson.items[0].sugar_g);
//     console.log(resjson.items[0].protein_g);
//   })
//   .catch((err) => console.error(err));
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b5b93f8d91mshbf7752d57342d87p1ff623jsn8aa205648c63",
//     "X-RapidAPI-Host": "montanaflynn-geocoder.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://montanaflynn-geocoder.p.rapidapi.com/address?address=2802%20Clarendon%20rd%2C%20Brooklyn%2C%20NY%20%2C%2011226",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5b93f8d91mshbf7752d57342d87p1ff623jsn8aa205648c63",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

fetch(
  "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=pizza",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

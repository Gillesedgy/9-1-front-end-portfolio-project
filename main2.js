const main = document.querySelector("main");
const container = document.querySelector(".container");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5b93f8d91mshbf7752d57342d87p1ff623jsn8aa205648c63",
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  },
};

fetch("https://themealdb.p.rapidapi.com/random.php", options)
  .then((response) => response.json())
  .then((res) => {
    console.log(res.meals);
    console.log(Object.values(res.meals[0])); //
    console.log(Object.keys(res.meals[0])); //

    for( const entry of Object.entries(res.meals[0])){
        console.log(`${entry[0]}: ${entry[1]}`)
    }
  })
  .catch((err) => console.error(err));

// const URL = "www.themealdb.com/api/json/v1/1/random.php";
fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

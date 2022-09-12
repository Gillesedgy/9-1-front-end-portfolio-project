// const input = input.value; //
// const Base_URL = `https://www.cheapshark.com/api/1.0/games?title=`;

const form = document.querySelector("form");
const header = document.querySelector(".header");
const mainContainer = document.getElementsByClassName("main-container li");
const main = document.querySelector("main");
const questionBtn = document.querySelector(".question-btn");
const checkAnsswerBtn = document.querySelector(".answer-btn");
const aside1 = document.getElementsByClassName("aise1");
const aside2 = document.querySelector(".aside2 ul");
// //! DONT FORGET TO FIX event listener to proper selector for btn functionality

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5b93f8d91mshbf7752d57342d87p1ff623jsn8aa205648c63",
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  },
};

fetch("https://themealdb.p.rapidapi.com/search.php?s=pizza", options)
  .then((response) => response.json())
  .then((resJson) => {
    // console.log(resJson)
    console.log(resJson.meals);
    resJson.meals.forEach((meal) => {
      const article = document.createElement("article");
      article.classList.add("card");
      main.append(article);
      const img = document.createElement("img");
      img.innerHTML = meal.strMealThumb;

      const mealName = document.createElement("h2");
      mealName.innerHTML = meal.strMeal;
      console.log(mealName);

      const mealInstruction = document.createElement("p");
      mealInstruction.innerHTML = meal.strInstructions;

      const measure = document.createElement("ol");
      measure.innerHTML = meal.strMeasure;
      console.log(measure[i]);

      const videoLink = document.createElement("a");
      videoLink.innerHTML = meal.strYoutube;
      videoLink.href = "#";
      mealName.prepend(img);
      article.append(mealName, mealInstruction, videoLink);
    });
  })
  .catch((err) => console.error(err));

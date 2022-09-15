const form = document.querySelector("form");
const header = document.querySelector(".header");
const mainContainer = document.getElementsByClassName("main-container li");
const mainP = document.querySelector("main p");
const searchBtn = document.querySelector(".search-btn");
const luckyBtn = document.querySelector(".Lucky-btn");
const aside1 = document.querySelector(".recipe ");
const aside2 = document.querySelector(".aside2 ul");
const searchBar = document.getElementById("search-bar");
const luckyLink = document.querySelector(".lucky-link");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5b93f8d91mshbf7752d57342d87p1ff623jsn8aa205648c63",
    "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
  },
};
// let URL = `https://themealdb.p.rapidapi.com/search.php?s=`
//! Header title/author, create emelents for
const title = document.createElement("h1");
title.innerHTML = `The Menu`;
header.append(title);
const author = document.createElement("p");
author.innerHTML = "by Edgy Gilles";
header.append(author);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  aside1.innerHTML = "";
  mainP.innerHTML = "";
  let input = searchBar.value; //! user input

  fetch(`https://themealdb.p.rapidapi.com/search.php?s=${input}`, options)
    .then((response) => response.json())
    .then((resJson) => {
      // console.log(resJson.meals);

      if (resJson.status && resJson.status == 404) {
        const p = document.createElement("p");
        p.innerHTML = `This is not a real meal`;
        aside1.append(p);
      }
      resJson.meals.forEach((meal) => {
        const article = document.createElement("article");
        article.classList.add("card");
        aside1.append(article);

        const img = document.createElement("img");
        // console.log(img);
        img.setAttribute("src", `${meal.strMealThumb}`);

        const mealName = document.createElement("h2");
        mealName.innerHTML = meal.strMeal;
        //!
        const mealInstruction = document.createElement("p");
        mealInstruction.innerHTML = meal.strInstructions;
        mealInstruction.classList.add("hidden");

        //? need to somehow print all the steps for measure and ingredients...
        // const measure = document.createElement("ol");
        // measure.innerHTML = meal.strMeasure;
        // console.log(measure);

        const videoLink = document.createElement("a");
        videoLink.innerText = "Watch Video";
        // videoLink.href = "#";
        videoLink.setAttribute("href", meal.strYoutube);
        videoLink.setAttribute("target", "_blank"); //!Open in new tab
        // main.append(img);
        //? include tags
        //! Button
        const InstructionBtn = document.createElement("button");
        InstructionBtn.innerText = "Show Instructions";
        InstructionBtn.addEventListener("click", () => {
          mealInstruction.classList.toggle("hidden");
        });
        for (let i = 0; i <= 20; i++) {
          let ingrd = "strIngredient" + i;
          let meas = "strMeasure" + i;
          if (meal[ingrd]) {
            console.log(meal[ingrd], meal[meas]);
          }
        }
        console.log(meal);
        // aside1.append(img);
        article.append(
          img,
          mealName,
          mealInstruction,
          videoLink,
          InstructionBtn
        );

        //! ingredients
        //           for(strIngredient in resJson.meals){
        // if()
        //           }
      });
      form.reset();
    })

    .catch((err) => console.error(err));
});

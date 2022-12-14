// require("dotenv").config();
// console.log(process.env);

const form = document.querySelector("form");
const header = document.querySelector(".header");
const searchSeaction = document.getElementsByClassName("search-seaction li");
const errSect = document.querySelector("header");
const mainP = document.querySelector("main p");
const searchBtn = document.querySelector(".search-btn");
const randomBtn = document.querySelector(".random-btn");
const aside1 = document.querySelector(".recipe ");
const searchBar = document.getElementById("search-bar");
const luckyLink = document.querySelector(".lucky-link");
const ul = document.querySelector(" .result ul");
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

  // if(typeof searchBar.value !== 'string'){
  //   // const pError = document.createElement("p")
  //   // pError.innerText= `Please Enter a meal Name `

  //   // article.append(pError)
  //   alert("Enter a name")
  // }
  // else{

  // }

  aside1.innerHTML = "";
  mainP.innerHTML = "";
  let input = searchBar.value; //! user input

  fetch(`https://themealdb.p.rapidapi.com/search.php?s=${input}`, options)
    .then((response) => response.json())

    .then((resJson) => {
      resJson.meals.forEach((meal) => {
        const article = document.createElement("article");
        article.classList.add("card");
        aside1.append(article);

        const img = document.createElement("img");
        img.setAttribute("src", `${meal.strMealThumb}`);

        const mealName = document.createElement("h2");
        mealName.innerHTML = meal.strMeal;
        //!
        const mealInstruction = document.createElement("p");
        //!
        const videoLink = document.createElement("a");
        videoLink.innerText = "Watch Video";
        videoLink.setAttribute("href", meal.strYoutube);
        videoLink.setAttribute("target", "_blank"); //!Open in new tab

        //! Button to show instruction
        const InstructionBtn = document.createElement("button");
        InstructionBtn.innerText = "Show Instructions";
        InstructionBtn.addEventListener("click", () => {
          mealInstruction.classList.toggle("hidden");

          mealInstruction.innerHTML = meal.strInstructions;
          if (mealInstruction.style.display === "none") {
            //! this SHOWS the form
            mealInstruction.style.display = "block";
            InstructionBtn.innerHTML = `Hide Instructions`;
          } else {
            //! This HIDES the form and CHANGES the button HTML to Show
            mealInstruction.style.display = "none";
            InstructionBtn.innerHTML = `Show Instructions`;
          }
        });
        img.append(mealInstruction);
        //? err
        // console.log(searchBar.value)

        //! ingredients and Measurements outside of forEach
        for (let i = 0; i <= 20; i++) {
          let ingrd = "strIngredient" + i;
          let meas = "strMeasure" + i;
          if (meas[ingrd]) {
            mealName.append(ul);
            const li = document.createElement("li");
            li.innerHTML = `${meal[ingrd]} - ${meal[meas]}`;
            mealName.append(li);
          }
        }

        article.append(
          img,
          mealName,
          mealInstruction,
          videoLink,
          InstructionBtn
        );
      });
    })

    .catch((err) => console.error(err));
});

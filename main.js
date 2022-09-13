const form = document.querySelector("form");
const header = document.querySelector(".header");
const mainContainer = document.getElementsByClassName("main-container li");
const mainP = document.querySelector("main p");
const searchBtn = document.querySelector(".search-btn");
const luckyBtn = document.querySelector(".Lucky-btn");
const aside1 = document.getElementsByClassName("aise1");
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
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mainP.innerHTML = "";
  let input = searchBar.value; //! user input

  fetch(`https://themealdb.p.rapidapi.com/search.php?s=${input}`, options)
    .then((response) => response.json())
    .then((resJson) => {
      console.log(resJson);

      resJson.meals.forEach((meal) => {
        const article = document.createElement("article");
        article.classList.add("card");
        mainP.append(article);
      
        const img = document.createElement("img");
        // img. = meal.strMealThumb;
        console.log(img)
        img.setAttribute(
          "src", `${meal.strMealThumb}`);

        const mealName = document.createElement("h2");
        mealName.innerHTML = meal.strMeal;
        //!
        const mealInstruction = document.createElement("p");
        mealInstruction.innerHTML = meal.strInstructions;
        mealInstruction.classList.add("hidden");

        //? need to somehow print all the steps for measure and ingredients...
        const measure = document.createElement("ol");
        measure.innerHTML = meal.strMeasure;
        console.log(measure);

        const videoLink = document.createElement("a");
        videoLink.innerText = "Watch Video";
        // videoLink.href = "#";
        videoLink.setAttribute("href", meal.strYoutube);
        videoLink.setAttribute("target", "_blank"); //!Open in new tab
        // main.append(img);

        //! Button
        const InstructionBtn = document.createElement("button");
        InstructionBtn.innerText = "Show Instructions";
        InstructionBtn.addEventListener("click", () => {
          mealInstruction.classList.toggle("hidden");
        });
        // aside1.append(img);
        article.append(img, mealName, mealInstruction, videoLink, InstructionBtn);
      });
      form.reset();
    })

    .catch((err) => console.error(err));
});

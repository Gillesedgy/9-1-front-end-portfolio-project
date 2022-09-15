const main = document.querySelector("main p");
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


    // console.log(Object.values(res.meals[0])); //
    // console.log(Object.keys(res.meals[0])); //

    // for( const entry of Object.entries(res.meals[0])){
    //     console.log(`${entry[0]}: ${entry[1]}`)
    // }






    const meal = res.meals[0];
    console.log(meal);
    const article2 = document.createElement("article");
    article2.classList.add("card");
    main.append(article2);

    const img = document.createElement("img");
    console.log(img);
    img.setAttribute("src", `${meal.strMealThumb}`);

    const mealName = document.createElement("h2");
    mealName.innerHTML= meal.strMeal;
    const mealInstruction = document.createElement("p");
    mealInstruction.innerHTML = meal.strInstructions;
    mealInstruction.classList.add("hidden");
    const videoLink = document.createElement("a");
    videoLink.innerText = "Watch Video";
    // videoLink.href = "#";
    videoLink.setAttribute("href", meal.strYoutube);
        videoLink.setAttribute("target", "_blank"); 
        article2.append(mealName, img, mealInstruction, videoLink);
  })
  .catch((err) => console.error(err));

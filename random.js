const main = document.querySelector("main p");
const container = document.querySelector(".container");

fetch("https://themealdb.p.rapidapi.com/random.php", KEY)
  .then((response) => response.json())
  .then((res) => {
    console.log(res.meals);
    const meal = res.meals[0];
    console.log(meal);
    const article2 = document.createElement("article");
    article2.classList.add("card");
    main.append(article2);

    const img = document.createElement("img");
    console.log(img);
    img.setAttribute("src", `${meal.strMealThumb}`);

    const mealName = document.createElement("h2");
    mealName.innerHTML = meal.strMeal;
    const mealInstruction = document.createElement("p");
    // mealInstruction.innerHTML = meal.strInstructions;
    // mealInstruction.classList.add("hidden");
    const videoLink = document.createElement("a");
    videoLink.innerText = "Watch Video";
    // videoLink.href = "#";
    videoLink.setAttribute("href", meal.strYoutube);
    videoLink.setAttribute("target", "_blank");

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
        //! this HIDES the form and CHANGES the button HTML to Show
        mealInstruction.style.display = "none";
        InstructionBtn.innerHTML = `Show Instructions`;
      }
    });
    img.append(mealInstruction);
    for (let i = 0; i <= 20; i++) {
      let ingrd = "strIngredient" + i;
      let meas = "strMeasure" + i;
      if (meal[ingrd]) {
        console.log(meal[ingrd], meal[meas]);
        mealName.append(img);
        const ol = document.createElement("ol");
        ol.innerHTML = `${meal[ingrd]} - ${meal[meas]}`;
        mealName.append(ol);
      }
      article2.append(
        img,
        mealName,
        mealInstruction,
        videoLink,
        InstructionBtn
      );
    }
  })
  .catch((err) => console.error(err));

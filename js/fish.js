const fishFood = () => {
    const foodBox = document.getElementById('searchFood');
    const foodText = foodBox.value;
    console.log(foodText)
    foodBox.value = ''

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodText}`;
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.meals));
}
const searchResult = meals => {
    const displayMeals = document.getElementById('searchMeals');
    displayMeals.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
    </div>`;

        displayMeals.appendChild(div);

    })
}
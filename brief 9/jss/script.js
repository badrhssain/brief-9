var cat = document.querySelector("#dd");
var mealEl = document.querySelector("#show");
async function searchM(){

    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    var data = await res.json();
    cat.innerHTML = `
    <select onchange="getCat(this.value)">
    ${
        data.categories.map(categories =>
        `
        <option>${categories.strCategory}</option>
            `
        )
    }
    </select>`


}
async function getCat(categorie){

    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);
    var data = await res.json();
   console.log(data);
   mealEl.innerHTML = data.meals.map(
    (meal)=>`
        <div class="meal col-6 col-md-4 col-lg-3 my-5">
            <img class="pics" src="${meal.strMealThumb}"alt="${meal.strMeal}"/>
            <div class="meal-info" data-mealID="${meal.idMeal}"
                 <h3>${meal.strMeal}</h3>
            </div> 
        </div> `
).join("");
}
async function loadOn()
{
      var res =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`);
      var data = await res.json();
            
                mealEl.innerHTML = data.meals.map(
                    (meal)=>`
                    <div class="meal col-6 col-md-4 col-lg-3 my-5">
                    <img src="${meal.strMealThumb}"alt="${meal.strMeal}"/>
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                     </div> </div> `
                ).join("");
}
loadOn();
searchM();




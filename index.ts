const meals = [
    {
        "id": 1,
        "Breakfast" : "Scrambled Eggs and Toast",
        "Lunch" : "Greek Yorghurt Chicken Salad",
        "Dinner" : "Shrimp Scampi"
    },
    {
        "id": 2,
        "Breakfast" : "Raspberry Chia and Peanut Butter Oatmeal",
        "Lunch" : "Shrimp - Avocado Salad",
        "Dinner" : "Brocolli Pesto Pasta"
    },
    {
        "id": 3,
        "Breakfast" : "Breakfast Burrito",
        "Lunch" : "Mermaid Veggie Bowl",
        "Dinner" : "Easy Bolognese"
    },
    {
        "id": 4,
        "Breakfast" : "Greek Yorghurt Pancakes",
        "Lunch" : "Bacon Linguine",
        "Dinner" : "Taco Soup"
    },
    {
        "id": 5,
        "Breakfast" : "Blueberry Banana Nut Smoothie",
        "Lunch" : "Smoked Turkey Panini",
        "Dinner" : "Coconut Curry Ramen"
    },
    {
        "id": 6,
        "Breakfast" : "Pumpkin Chocolate Chip Bread",
        "Lunch" : "Double Grilled Cheese Sandwich",
        "Dinner" : "Instant Pot Mac and Cheese"
    },
    {
        "id": 7,
        "Breakfast" : "Blueberry Quinoa Muffins",
        "Lunch" : "Sweet Potato Toastadas",
        "Dinner" : "Lemon Chicken Breasts"
    }
];

const otherMeals = [
    {
        "id": 8,
        "Breakfast" : "Salsa Verde Baked Eggs",
        "Lunch" : "BBQ Rainbow Beef Salad",
        "Dinner" : "Black Bean Stuffed Sweet Potatoes"
    },
    {
        "id": 9,
        "Breakfast" : "Huevos Rancheros",
        "Lunch" : "Tomato Penne and Avocado",
        "Dinner" : "Sheet Pan Sausage and Veggies"
    },
    {
        "id": 10,
        "Breakfast" : "Apple and Maple Baked Oatmeal",
        "Lunch" : "Bombay Potato Frittata",
        "Dinner" : "Loaded Sheet Pan Nachos"
    }

]

meals.push.apply(meals, otherMeals);


const btn = document.getElementById("btn");
const display = document.querySelector<HTMLElement>(".display");
const reset = document.getElementById("reset")

function createMeal(obj) {
    display.innerHTML= " "
    display.style.color = "#3C3522"
    const breakfast = document.createElement('p');
    breakfast.innerText = "Breakfast:" + " " + obj.Breakfast;
    display.appendChild(breakfast)
    const lunch = document.createElement('p');
    lunch.innerText = "Lunch:" + " " +obj.Lunch;
    display.appendChild(lunch)
    const dinner = document.createElement('p');
    dinner.innerText = "Dinner:" + " " +obj.Dinner;
    display.appendChild(dinner)
}

btn.addEventListener("click", function() {
    const currentMeal = Math.floor(Math.random() * meals.length);
    createMeal(meals[currentMeal]);
    
        
});

reset.addEventListener("click", function () {
    display.innerHTML = " "
    
});



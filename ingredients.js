const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// WHile Loop - print all ingridients
let i=0;
while(i < ingredients.length){
  console.log(ingredients[i]);
  i++
};

// For Loop - print all ingridients
for(let i=0; i<ingredients.length;i++){
  console.log(ingredients[i]);
}

// FOR Loop backwards - print all ingridients
for(let i=ingredients.length-1; i>=0 ; i--){
  console.log(ingredients[i]);
};

//Soal - 01
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greetings: function() {
      console.log("hello world")
    }
  }
  
  /// EDIT HERE
  person.name = "Habell Dolosha Purba";
  person.favDrinks[1] = "tap water";
  person.greetings = (name => `Hello, ${name}`);
  
  /// STOP
  
  console.log(person.name);
  console.log(person.age);
  console.log(person.favDrinks);
  console.log(person.greetings("John Watson"));

/*Expected Result Soal - 01
  // namamu sendiri
100
["coffee", "tap water", "tea"]
"Hello, John Watson" */

//Soal - 02
function getObjectValue(obj, path) {
    path = path.split(".");
    // console.log(path.length);

    for(let i=0; i<path.length; i++){
        if(obj.hasOwnProperty(path[i])){
            obj = obj[path[i]];
        }
        else {
            return null;
        }
    }
    return obj;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

/*Expected Result Soal - 02
espresso should be "lampung"
coffeeBrand should be null
isMilkVegan should be false */

//Soal - 03
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (stockItems) => {
    /// EDIT DOWN HERE
    stockItems.map(obj => {
      obj.btc = obj.btc.sell - obj.btc.buy;
      obj.eth = obj.eth.sell - obj.eth.buy;
      obj.doge = obj.doge.sell - obj.doge.buy;
      delete obj.day;
    });

    const sum = stockItems.reduce((prevObj, currObj) => {
      prevObj.btc += currObj.btc;
      prevObj.eth += currObj.eth;
      prevObj.doge += currObj.doge;
      return prevObj;
    });

    return sum;
  }
  
  console.log(calculateIncome(items));

/*Expected Result Soal - 03
{
  btc: 0,
  doge: -2.5,
  eth: -1.5
}
*/
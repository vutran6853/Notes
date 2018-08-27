/////// OJECTS SQURE BRACKETS 
let chameleon = {
    color: "fucsia",
    texture: "scaly"
};
console.log(chameleon);

function changeProp(propName, value) {
    chameleon[propName] = value;
};
changeProp("color", "Blue");
console.log(chameleon.color);


/////////// OJECTS METHODS ////////////////////////////////////////
let myCar = {
    miles: 2000,
    drive: function() {
        myCar.miles++;
    }
}
myCar.drive();
console.log(myCar.drive);

myCar.miles
console.log(myCar.miles);


//// ARRAY - ADD NEW VALUE TO ARRAY USE ( .push ) AT END OF ARRAY
myFriends = ["Joe", "Elle", "Maria", "Yang"];

myFriends.push("Vu");
console.log(myFriends);

/// ARRAY - ADD NEW VALUE TO ARRAY USE ( .unshift ) AT START OF ARRAY

myFriends.unshift("Jay");
console.log(myFriends);

////////////////////////////////////////////////////////////////////////////////////

var user = {
    name: "Billy",
    age: 18,
    email: "billy123@billy.com"
}
function getName(user) { 
    return user.name;
}

getName(user);  

////////////////////////////////////////////////////////////////////////////////////

var calendar = {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  }
  
  function getWeekDay(){
    return calendar.weekDays[2];
  }

console.log(getWeekDay());

////////////////////////////////////////////////

let myCars = {
    make: "Honda",
    model: "Civic",
    color: "white",
    wheels: 4,
    isAwesome: false,
    printInfo: function() {
        console.log("Make", this.make);
    } 
}

function changeCar(car) {
    car.make = "Toyota";
    car.printInfo();
}

changeCar(myCars);

//////////////////////////////////////////////////

let users = {
    name: "Vu",
    admin: true
}

users.role === "studnet" ? users.canHaveKeys = true : users.canHaveKeys = false;

console.log(users);

/////////////////////////////////////////////////////////

let determinRole = () => users.role ? "He is an admin" : "Not Authorized";

console.log(determinRole());

////////////////////  CALLBACK  /////////////////////////////////////

// let superHero = ["Batman", "Aqua", "SuperMan"]

// superHero.map(function(e) {
//     console.log(e);
// })

// function doHomeWork(subject, callback) {
//     alert("Starting my " + subject + " homework")
//     callback();
// }

// doHomeWork("Math", finishedHomeWork);

// function finishedHomeWork() {
//     console.log("Finished my homework !!");
// }

///////////////////////////////////////////////////////

let sunnyInstructions = function() {
    console.log("It is nice out waer shirts");
}

let rainyInstructions = function() {
    console.log("Bring an umbrella...");
}

var currentWeather = {};

let weatherInstructions = function(weather, callback) {
    currentWeather.High = weather.high;
    currentWeather.Low = weather.low;
    callback()
}

if(currentWeather.forcast === "sunny") {
    weatherInstructions({High: 90, Low: 75}, sunnyInstructions);
} else if(currentWeather.forcast === "raniny") {
    weatherInstructions({High: 60, Low: 55}, rainyInstructions );
}

//////////////////////  FOR IN   //////////////////////////////
var number = {
    age: 30,
    score: 100,
    length: 12,
    year: 2016
};

function objectLooper(number) {
    for(var key in number) {
        number[key] = 0;
    }
  return number;
}

console.log(objectLooper(number));

////////////////////////////////////////////////


//////////////////////// ARRAY //////////////////////

let random = ["hello", 5, true, [1, 3, 4, 6], {name: "Vu"}];

random.unshift(6);


console.log(random);


////////////////////////// Tremple string //////////

// let firstname = "Vu"
// let lastname = 'Tran'

// let fullName = `${firstname} ${lastname}`


/////////////////////////////ARROW FUNCTION////////////////////////////////

// function add(x, y) {
//   return x + y;
// }

// add(5, 4);

add = (x, y) => x + y;
add(5, 4);

subtract = (a, b) => a - b
subtract(5, 4);

let printInfo = () => console.log('Hello there');

//////////////////////////ARRAY (.map)//////////////////////////////////

let answers = ["yes", "no", "no", "yes", "no", "no"];

// let newAnswers = answers.map(function(e, index, array) {
//   if(e === "yes") {
//     return "no";
//   }
//   else {
//     return "yes";
//   }
// });

// let newAnswers = answers.map((e, i, array) => e === 'yes' ? 'no' : 'yes');


// console.log(answers);
// console.log(newAnswers);

let nums = [1, 2, 3, 4, 5];

let double = nums.map((e) => e * 2);
// console.log(double);


////////////////////////////  ARROW (.filter) /////////////////

let numArray = [1, 2, 3, 4, 5];


var jobs = [{receptionist: "James"}, 
            {programmer: "Steve"},
            {designer: "Alicia"}];

var solution = jobs.filter((e, i, array) => e.programmer);

/////////////////////// ARROW (.reduce) ///////////////////////////////

let numss = [41, 22, 73, 44, 25];

let answerss = numss.reduce((acc, curr) => acc + curr, 10);

// console.log(answerss);


////////////////////////// ( FOR IN ) LOOP OJECTS ///////////////////

let ojects= {
  x: 7,
  y: 4,
  z: 2
}

// for(let key in ojects) {
//   console.log(ojects[key]);
// }


let company = {
  Erik: "admin",
  Spencer: "peon",
  Logan: "King",
  Bob: "admin",
}

for(let prop in company) {
  if(company[prop] === 'admin') {
    delete company[prop];
  }
}

// console.log(company);

////////////////////////// OBJECT ( .assign ) //////////

let ojects1 = {
  a: 1,
  b: 2
};

let ojects2 = Object.assign({}, ojects1)


// console.log(ojects1);
// console.log(ojects2); 

///////////////////// DESTRUCTURING ///////////////////////////

let emplyee = {
  first_name: "Erik"
}

// let name = emplyee.first_name;
let { first_name } = emplyee;
// console.log(first_name);


///////////////////  CLASS  /////////////////////////

class CarMaker {
  constructor(color, wheels, make, engine) {
    this.color = color;
    this.wheels = wheels;
    this.make = make;
    this.engine = engine;
  }
  paintShop(newColor) {
    this.color = newColor;
  }
}

let car1 = new CarMaker("Blue", 2, "Chevy", 2);
car1.paintShop("Green");

console.log(car1);



/////////////////////////////////////////////////////////


function removeVowels(str) {
    return str.replace{/[aeiou]gi, ''};
  }
  
  let str = "I love to c0de";


//////////////////////////////////////////////////////////////

  function sondDecoder(song) {
    let decoded = song.split("WUB");
    for(let i = 0; i <decoded.length; i++) {
      if(decode[i] === '') {
        decoded.splice(i, 1);
        i -=1
      }
    }
    let finshed = decoded.join('');
  }

///////////////////////////////////////////////////////////////// 


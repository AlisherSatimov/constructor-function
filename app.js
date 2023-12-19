let person = document.querySelector(".person");
let animal = document.querySelector(".animal");
let car = document.querySelector(".car");
let fruit = document.querySelector(".fruit");
let food = document.querySelector(".food");

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let person1 = new Person("Nolan", "Christofer", 48, "blue");

person.textContent = `${person1.lastName} ${person1.firstName} age ${person1.age}, eye ${person1.eyeColor}`;

// Constructor function for Animal objects
function Animal(name, color, weight, height) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.height = height;
}

let animal1 = new Animal("Pitbull", "grey", 37, "1.2");

animal.textContent = `${animal1.name} is ${animal1.color}, weight ${animal1.weight} kg, height ${animal1.height}m`;

// Constructor function for Car objects
function Car(name, color, model, HP) {
    this.name = name;
    this.color = color;
    this.model = model;
    this.horsePower = HP;
}

let car1 = new Car("Nexia", "black", "Chevrolet", "100");

car.textContent = `${car1.name} is ${car1.color}, model ${car1.model}, Horse Power ${car1.horsePower}`;

// Constructor function for Car objects
function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.fShape = shape;
}

let fruit1 = new Fruit("Apple", "red", "circle");

fruit.textContent = `${fruit1.name} is ${fruit1.color}, shape ${fruit1.fShape}`;

// Constructor function for Car objects
function Food(name, status, cost) {
    this.name = name;
    this.status = status;
    this.cost = cost;
}

let food1 = new Food("Chicken soup", "hot", "11");

food.textContent = `${food1.name} is ${food1.status}, price ${food1.cost}$`;

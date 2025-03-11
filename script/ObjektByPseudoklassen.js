//Konstruktor
function Animal(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
};

//Erzeugung und Nutzung der Objekte
const fish = new Animal('Fischi', 'Grün', 2);
console.log(fish.name);
console.log(fish.color);
console.log(fish.age);

//Methoden
Animal.prototype.eat = function(food) {
    console.log('Mmpf, mmpf, ' + food + '!');
}

Animal.prototype.drink =function(drink) {
    console.log('Mmmmmmh, ' + drink + '!');
}

function Dog(name, color, age, type) {
    Animal.call(this, name, color, age);
    this.type = type;
}

Dog.prototype = new Animal();

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log('Wuff wuff');
}

const bello = new Dog('Bello', 'Weiß', 2, 'Malteser');

bello.bark();
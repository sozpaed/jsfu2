/*
 * Prototypische Objektorientierung
 *
*/

//Construktor
const animal = {
    name: '',  //Eigenschaften
    color: 'Braun',
    age: 0,
    eat: function(food) {
        console.log('Mmpf mmpf, ' + food + '!');
    },
    drink: function(drink) {
        console.log('Mmmmmmh, ' + drink + '!');
    }
}

const cat = Object.create(animal);  //Erben von Objekten
const dog = Object.create(animal);  //Erben von Objekten
//const vegetarianDog = Object.create(animal);

const vegetarianDog = Object.create(dog);

vegetarianDog.eat = function(food) {
    if(food.indexOf('Fleisch') >= 0 || food.indexOf('fleisch') >= 0) {
        throw new Error('Ich es doch kein Fleisch!');
    } else {
        //console.log('Mmpf mmpf, ' + food + '!');
        Object.getPrototypeOf(this).eat.call(this, food);
    }
}

cat.meow = function() {
    console.log('Miauuuuu! ');
}

dog.bark = function() {
    console.log('Wuff wuff!');
}


vegetarianDog.eat('Käse');
vegetarianDog.bark();
vegetarianDog.drink('Wasser');
vegetarianDog.toString();

cat.eat('Katzenfutter');    //Methode
cat.drink('Milch');
console.log(cat.color);     //Eigenschaften
dog.eat('Fleisch');
dog.drink('Wasser');
console.log(dog.color);
cat.meow();
dog.bark();
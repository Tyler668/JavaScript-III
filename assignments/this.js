/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
When in the global scope, the 'this' keyword refers to the Window object.

* 2. Implicit Binding
When a function containing the 'this' keyword is called on an object, all instances of 'this' are automatically assigned to the object the function was called on, 
that is, the object to the left of the dot. Eg: obj.function()   instances of 'this' in function() will refer to 'obj'

* 3. New binding
When the 'this' keyword is used in the context of a constructor function, it will refer to the specific object being passed into the constructor by way of an argument.

* 4. Explicit binding
When using an additional specifier such as .call , .apply, or .bind, 'this' can be forced to refer to a new object rather than the automatically assigned implicit binding. 

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
const example = this;
console.log(this);   //Puts out the window object


// Principle 2
// code example for Implicit Binding
const exampleObject = {
    name: "Tyler",
    height: '6ft 1in',
    speak: function(){
        console.log(`My name is ${this.name} and I am ${this.height} tall.`);   //'This' is automatically assigned to exampleObject since it precedes the dot notation for the function.
    }
}
exampleObject.speak();


// Principle 3
// code example for New Binding
function Animal (critter){
    this.name = critter.name;
    this.speak = function(){
        console.log(`I am ${this.name}`);    //'This' refers to the object passed into the constructor as an argument, in this case, the 'dog' object. It grabs the name 'fido'
    }  
}

const dog = {
    name: 'fido',
    breed: 'german shepherd',
}

const newDog = new Animal(dog);
newDog.speak();



// Principle 4
// code example for Explicit Binding

const fish = {
    name: 'Swimmy',
    breed: "I don't know fish breeds",
}

newDog.speak.call(fish);   //Despite using the newDog object I was able to make 'this' refer to my fish object by using the call function and explicitly define it.

// Factory function: ----------------------------------------

function square(edge){
    return {
        edge,
        draw: function(){
            console.log('nu sa desenez boss, da mni latura: ' + edge);
        }
    }
}

const square1 = square(2);
square1.draw();

// Shape Object-----------------------------------

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

// Constructor Function (Square object): -----------------------------------------

function Square(edge, color){
    Shape.call(this, color);
    // Instance members: 
    this.edge = edge;
    let defaultLocation = { x:0, y:0 };

    let computeOptimumLocation = function (factor){ 
        //code
    }; 

    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            //optionally validate value
            defaultLocation = value;
        }
    });

    this.move = function(){
        //code;
        this.draw();
    };
}

// Prototypical inheritance:  ---------------------------------------------

function extend (Child, Parent) { // this is intermidiate function inherticance
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Square, Shape);

// Prototype member: -------------------------------------------

Square.prototype.draw = function() {
    console.log('nu sa desenez boss, da mni latura: ' + this.edge);
};

// Get all keys in Square: -------------------------------------------------------

const square2 = new Square(6); 
square2.draw();

//Meth1:- shows both instance and prototype members
console.log("\n Inst + Prot Members: ");
for( let prop in square2){
    console.log(prop, square2[prop]);
}

//Meth2: - shows only instance members because of obj.keys(sq2);
console.log("\n Inst Members: ");
const properties = Object.keys(square2);
properties.forEach(x => console.log(x, square2[x]));

//console.log(square2.defaultLocation);

// new Circle constructor : ---------------------------------------

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

const sq = new Square(5, 'green');
const c = new Circle(2, 'yellow');
const sh = new Shape('red');

// Method Overriding : ---------------------------------------------

Circle.prototype.duplicate = function(){
    // Shape.prototype.duplicate.call(this); // call this if you want to access the overridden method.
    console.log('duplicate circle');
}

// POLYMORPHISM : ------------------------------------------------

Square.prototype.duplicate = function(){
    console.log('duplicate square');
}

const shapes = [new Circle(2, 'black'), new Square(1, 'white')];
console.log('\nPolymorphism: ');
for (let shape of shapes){
    shape.duplicate();
}

// !!! COMPOSITION : --------------------------------------------
// If the inheritance hierarchy is bigger than 1 level, use compositon !
// Composition in JS :  Mixins ------------------

function mixin(target, ...sources){ // rest operator(...) collects all arguments in an array
    Object.assign(target, ...sources); // now we spread the elemnts from sources array, using the spread operator(...),
    //  because assign method doesn't take an array as argument
}

const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('swiming');
    }
};

function Person(){}
mixin(Person.prototype, canEat, canWalk); // creates a person onj, 
//with all props of canEat obj and canWalk obj

const pers = new Person();
console.log(pers);

function GoldFish(){}
mixin(GoldFish.prototype, canEat, canSwim);

 const goldFish = new GoldFish();
 console.log(goldFish);
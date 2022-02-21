// Attention! 
// There are no actual classes in Javascript, behind the scenes, these classes 
// work with prototypical inheritance. So this is basically just syntax
/*
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
Square.prototype.draw = function() {
    console.log('nu sa desenez boss, da mni latura: ' + this.edge);
};

<==>                                            */

class Square2{
    constructor(edge){
        // These are instance properties:
        this.edge = edge; 

        this.move = function(){
            //code;
            this.draw();
        };
    }

    // These are also instance properties, more specifically : Prototype properties
    // So these are the instance prop. of the prototype of the object
    draw() { 
        console.log('nu sa desenez boss, da mni latura: ' + this.edge);
    }

    // STATIC -------------------------
    // This is a Static property, and it can only be called using the class reference
    static parse(str) { 
        const edge = JSON.parse(str).edge;
        return new Square2(edge);
    } // These are used for utility functions that are not tied to a particular object
}

// Hoisting : --------------------------------------------------------------------
// = bringing the declaration to the top 
sayHello(); // This works because of Hoisting
// sayGoodbye(); // This does not work because it is not hoisted

//Function Decl :
function sayHello() {}

//Function Expr : 
const sayGoodbye = function() {};

// !!! Important class Declarations/Expressions are not hoisted !!! 

// Symbols : --------------------------------------------------------------------
// generate unique symobls that you can be used for "private" members
const key1 = Symbol();
const key2 = Symbol();

class MyClass{
    constructor (whatever){
        this[key1] = whatever;
        console.log(this[key1]);
    }

    [key2](){
        //code...
    }
}

const mc = new MyClass(1);
console.log(mc.key1);
console.log(mc.key2);

// WeakMaps : -----------------------------------------------------------------
// Also used for creating 'private' members, the key has to be an obj,
// the value can be anything
const _property = new WeakMap(); // _ is a convention to see private members, 
// but on it's own, it does not make the member private

class MyClass2{
    constructor (whatever){
        _property.set(this, whatever);
        
    }

    get whatever(){ // new getter syntax ------------------------------
        return _property.get(this);
    }

    set whatever (value){ // new setter syntax ------------------------
        _property.set(this, value);
    }


    func(){
        console.log(_property.get(this)); // this[_property] also works
    }
}

const mc2 = new MyClass2(1);
console.log(mc._property);

// Inheritance & Overriding : ---------------------------------------------------------------

class Shape2 {
    constructor (color) {
        this.color = color;
    }

    move(){
        console.log('move');
    }
}

class Circle2 extends Shape2 { // This automatically resets the constructor, 
    // thanks GOD
    constructor (color, radius){
        super(color); // mandatory to call super constructor !
        this.radius = radius;
    }

    move(){
        super.move(); // optional (only if we want to reuse code in super method)
        console.log('circle move');
    }

    draw(){
        console.log('draw');
    }
}

const circ = new Circle2('red', 2);
circ.move();
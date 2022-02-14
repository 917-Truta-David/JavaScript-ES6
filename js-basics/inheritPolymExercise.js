
// Prototypical Inheritance : -------------------------------------------

function HtmlElement(){
    this.click =  function(){
        console.log('clicked');
    }
}
HtmlElement.prototype.focus = function(){
    console.log('focused');
}

function HtmlSelectElement(items = []){
    this.items = items;
    this.addItem = function(item){
        this.items.push(item);
    }
    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item), 1);
    }
    this.render = function(){
        return `<select>\n${this.items.map(i => `\t<option>${i}</option>\n`).join('')}</select>`;
    }
}


HtmlSelectElement.prototype = new HtmlElement(); // If we would have used Object.create(HtmlElement.prototype),
// the click function would not be inherited, since it's an instance member.
HtmlSelectElement.prototype.constructor = HtmlSelectElement;


// Polymorphism : -----------------------------------------------------

function HtmlImageElement (src){
    this.src = src;
    this.render = function(){
        return `<img src= "${this.src}"/>`;
    }
} 

const e = new HtmlElement();

const elements = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement('img.jpg')
];

for (let element of elements)
    console.log(element.render());
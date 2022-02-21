
//ES6 module syntax (this requires export KW before constructor(class) )
// import {MyStack} from './stack.js';

//Common JS Module: 
const MyStack = require('./stack');


const stack = new MyStack();
stack.push(10);
stack.push('zece');
console.log(stack.pop());
console.log(stack.pop());
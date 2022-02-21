
const _stk = new WeakMap();
// use 'export' before 'class' for es6 module syntax
class MyStack{
    constructor () {
        _stk.set(this, []);
    }
   
    peek(){
        if( _stk.get(this).length < 1) throw new Error('There are no elements in the stack');
        return _stk.get(this)[ _stk.get(this).length-1];
    }

    push(value){
        _stk.get(this).push(value);
    }

    pop(){
        if( _stk.get(this).length < 1) throw new Error('There are no elements in the stack');
        return _stk.get(this).pop();
    }

    get count (){
        return _stk.get(this).length;
    }

}

module.exports = MyStack; // used only when importhing one thing

module.exports.MyStack = MyStack; //creates a prop., used when importhing more things
//module.exports.MyList = MyList;
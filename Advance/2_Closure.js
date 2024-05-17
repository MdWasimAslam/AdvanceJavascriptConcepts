// A function with its outer scope is called closure

function parent(){
    let a = 20;
    return function (){

        return function(){
            return a;
        }

    }
}


const child = parent();
const grandChild = child();

// console.log(grandChild())



//----- Question 


var createCounter = function(n) {
    let val = n
    return function() {
        return n++
    };
};


 const counter = createCounter(10)
console.log(counter())
console.log(counter())


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



//----- Question 1


var createCounter = function(n) {
    return function() {
        return n++
    };
};


 const counter = createCounter(10)
// console.log(counter())
// console.log(counter())



//---------- Question 2 ------- Write a closure function access parent variable and return the sum by the child compoennt


function out(outVal){
    let outValue = outVal
    return function(inVal){
        console.log(outValue+inVal)
    }
}


const inn = out(23)
// inn(2)



//------- Question 3 ----- Write a closure function with method function to add and retrive datas


function mainFunc(){
    let res=0;

   return {
    add:(num)=>{res+=num},
    display:()=>{console.log(res)}
   }

}


const op = mainFunc();
op.add(3);
op.add(5);
op.add(2);
op.display()
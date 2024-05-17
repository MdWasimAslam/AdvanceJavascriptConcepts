let iteration = 0;

var createCounter = function(num) {

    if(iteration===0){
        iteration++;
        return num;
    }else{
        num = num+iteration;
        iteration++
        return num;
    }
    
}

const counter = createCounter(10)
console.log(counter)
console.log(counter)
// Set is a collection of unique values

let data = new Set([1,2,4,"hello",{},true])
console.log(data)



let data2 = new Set([1,2,3,4,4,5,6,7,8,9,8,10,9,2]);
console.log(data2)


// Question - 1. Check if the array has unique values or not


let arr = [1,2,3,4,5,5,6,7,8,9,1,2,3,5];
let arr2 = [1,2,3,4,5,6,7,8,9,10];


function checkDuplicates(arr){
    const mySet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if(mySet.has(arr[i])) {
            return true;
        }else{
            mySet.add(arr[i]);
        }       
    }
    return false;
}

console.log(checkDuplicates(arr))
console.log(checkDuplicates(arr2))
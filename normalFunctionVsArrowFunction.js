// normal function vs Arrow function 

const add = function (first,second){
    return first+second;
}
const result = add (10,20);
console.log(result);



const add =(first,second)=>first+second;
const result = add(10,20);
console.log(result)

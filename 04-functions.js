function sum(a,b){
return a+b;
}
console.log(sum(3,5));
function product(c,d){
    return c*d;
}
console.log(product(10,10));

const square10 = product(10,10);
console.log(square10);

setTimeout(function(){
    console.log("hey you rocking");
},1000);

setTimeout(()=>{
    console.log("hey you rocking");
},1000);

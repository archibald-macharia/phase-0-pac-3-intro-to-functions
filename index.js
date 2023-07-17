// Follow along with the examples here
function sayHello(hello){
    hello="Hello World"
    return hello;
}
//sayHello("Hello World");

function add(x, y){
    sum = x + y;
    return sum;;
}
//console.log(add(3,5));

let teacher = `The teacher has taught me ${sayHello()} and how to add 3 + 5 which is ${add(3,5)}`
console.log(teacher);
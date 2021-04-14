function a() {
    var myVar = 3;
    console.log(myVar);
}

function b() {
    
    var myVar = 2;
    a();
    console.log(myVar);
}


console.log(myVar);
var myVar = 1;

b();
console.log(myVar);


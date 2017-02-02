document.write(10 + 20)
console.log(40 + 20)

var x;
console.log(x);
x= 30;
console.log(x);
x = 'SG';
console.log(x);
x = true;
console.log(x);
x = [3, 'ABC', true];
console.log(x);

//Named function
function add(a,b) {
    return a+b;
}

x = add(10,20);
console.log(x);

console.log(add());
console.log(add(1));
console.log(add(5,6,2,4));//first two values considered;

//Anonymous function
x = function() {
    console.log("This is an Anonymous function")
}
console.log(x);
x();//Invoking function x

//Constructor Function -> function can be used as a constructor;
//Access members within a constructor using this keyword;
function Emp() {
    this.ename = 'Amitha';
    this.empid = 3434;
}

x = new Emp();//emp object
console.log(x);

//JSON Data
x = {stdname: "Amitha R"}
console.log(x);
console.log(x.stdname);

//function in an array
x = [3, 'ABC', true, function() {return "This is a function within an array."}, {ename:'Amitha'}];
console.log(x);
console.log(x[2]);
console.log(x[3]());//function
console.log(x[4].ename);//object 

//function calling another function;
function temp(m) {
    m();
}

temp(function() {
    console.log("Anonymous in TEMP function.")
})


//DOM Manipulation;
function change() {
    var e = document.getElementById("h");
    var t = e.getAttribute("reply");//Hello
    e.innerHTML = t;//t value will be assigned to e.innerHTML(Welcome!)
}
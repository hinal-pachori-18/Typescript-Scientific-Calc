var memory = 0;
//Add the value in input text and perform operation
function dis(val) {
    var display = document.getElementById('result');
    display.value += val;
}
//Calculate the value
function solve() {
    var display = document.getElementById('result');
    var x = display.value;
    display.value = eval(x);
}
//delete from right
function delete_right() {
    var display = document.getElementById('result');
    display.value = display.value.substr(0, display.value.length - 1);
}
//Clear all value
function clr() {
    var display = document.getElementById('result');
    display.value = '';
    document.getElementById("Trigonometry").selectedIndex = 0;
    document.getElementById("Function").selectedIndex = 0;
}
//Exponent function e
function e() {
    var display = document.getElementById('result');
    var e = 2.7182818;
    if (display.value == '') {
        display.value = e.toString();
    }
    else {
        display.value = (parseInt(display.value) * e).toString();
    }
}
// //Pi function
function pi() {
    var display = document.getElementById('result');
    var pi = 3.14;
    if (display.value == '')
        display.value = pi.toString();
    else
        display.value = (parseInt(display.value) * pi).toString();
}
// // exp function
function exponent() {
    var display = document.getElementById('result');
    display.value = (Math.exp(parseInt(display.value))).toString();
}
// //Absolute value |x|
function absolute() {
    var display = document.getElementById('result');
    display.value = (Math.abs(parseInt(display.value))).toString();
}
// //1/x function
function oneByNum() {
    var display = document.getElementById('result');
    display.value = (1 / parseInt(display.value)).toString();
}
// //x power 2 => x square
function square() {
    var display = document.getElementById('result');
    display.value = (parseInt(display.value) * parseInt(display.value)).toString();
}
//  //square root
function squareroot() {
    var display = document.getElementById('result');
    ;
    display.value = (Math.sqrt(parseInt(display.value))).toString();
}
//  //10 power x
function powByX() {
    var display = document.getElementById('result');
    display.value = (Math.pow(10, parseInt(display.value))).toString();
}
//logarithm 
function logx() {
    var display = document.getElementById('result');
    display.value = (Math.log10(parseInt(display.value))).toString();
}
// //Natural log
function logNat() {
    var display = document.getElementById('result');
    ;
    display.value = Math.log(parseInt(display.value)).toString();
}
//  //Factorial 
function fact() {
    var display = document.getElementById('result');
    var fact = 1;
    var num;
    for (var num_1 = 1; num_1 <= parseInt(display.value); num_1++) {
        fact = fact * num_1;
    }
    display.value = fact.toString();
}
// // //Trignometric function
function trigno() {
    var x = document.getElementById('Trigonometry').value;
    var display = document.getElementById('result');
    if (x == "sin") {
        //Only accept value between range of -1 to 1;
        var p = Math.sin(parseInt(display.value) * Math.PI / 180);
        display.value = p.toFixed(2);
    }
    else if (x == "cos") {
        var q = Math.cos(parseInt(display.value) * Math.PI / 180);
        display.value = q.toFixed(2);
    }
    else if (x == "tan") {
        var r = Math.tan(parseInt(display.value) * Math.PI / 180);
        display.value = r.toFixed(2);
    }
}
//  //Functions //Asin and Acos can covert value in radian
function func() {
    var x = document.getElementById('Function').value;
    var display = document.getElementById('result');
    if (x == "asin") {
        var p = Math.asin(parseFloat(display.value));
        display.value = p.toFixed(2);
    }
    else if (x == "acos") {
        var b = Math.acos(parseFloat(display.value));
        display.value = b.toFixed(2);
    }
    else if (x == "floor") {
        display.value = Math.floor(parseInt(display.value)).toString();
    }
}
//  //+/- function
function plusminus() {
    var display = document.getElementById('result');
    var y = parseInt(display.value) * -1;
    display.value = y.toString();
}
//  //DEG Function
function deg() {
    var display = document.getElementById('result');
    display.value = (parseInt(display.value) * Math.PI / 180).toFixed(2);
}
// // Memory Clear
function MemoryClear() {
    memory = 0;
    var display = document.getElementById('result');
    display.value = memory.toString();
    console.log(memory);
}
// //Memory read //also use any datatype;
function MemoryRead() {
    var display = document.getElementById('result');
    display.value = memory;
    console.log(display.value);
}
// //Add in memory
function MemoryAdd() {
    var display = document.getElementById('result');
    memory = memory + eval(display.value);
    console.log(memory);
}
// //Minus in memory
function MemoryMinus() {
    var display = document.getElementById('result');
    memory = memory - parseFloat(eval(display.value));
    console.log(memory);
}
// //Save in memory
function MemorySave() {
    var display = document.getElementById('result');
    memory = parseFloat(display.value);
    console.log(memory);
}
// //F-E function + also used to conver string to number
function toExpo() {
    var display = document.getElementById('result');
    var x = (+display.value).toExponential();
    display.value = x;
}

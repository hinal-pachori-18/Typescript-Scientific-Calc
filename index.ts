let memory = 0;
//Add the value in input text and perform operation
function dis(val:string)
 {
    const display = document.getElementById('result') as  HTMLInputElement 
    display.value+=val;
     
}
//Calculate the value
function solve():void
{
    const display = document.getElementById('result') as  HTMLInputElement
    let x = display.value 
    display.value  = eval(x)
    
}
//delete from right
function delete_right():void
{
    const display = document.getElementById('result') as  HTMLInputElement;
    display.value = display.value.substr(0,display.value.length-1)

}
//Clear all value
function clr():void
{
    const display = document.getElementById('result') ! as HTMLSelectElement  | HTMLInputElement
    display.value = '';
    (document.getElementById("Trigonometry")! as HTMLSelectElement).selectedIndex=0;
    (document.getElementById("Function")! as HTMLSelectElement).selectedIndex=0;
    
}

//Exponent function e
function e()
{
    let display = document.getElementById('result') as HTMLInputElement
    const e= 2.7182818;
    if(display.value == '')
    { 
        display.value = e.toString();
    }
    else
    {
            display.value = (parseInt(display.value)* e).toString();
    }
   
  
}
// //Pi function
function pi()

{
    const display = document.getElementById('result')! as  HTMLInputElement;
    const pi = 3.14;
    if(display.value == '')
            display.value = pi.toString() ;
    else
        display.value = (parseInt(display.value) * pi).toString();
}
// // exp function
function exponent():void
{
    const display = document.getElementById('result')! as  HTMLInputElement;
    display.value = (Math.exp(parseInt(display.value))).toString();
}
// //Absolute value |x|
function absolute():void
{
    const display = document.getElementById('result')! as  HTMLInputElement;
    display.value = (Math.abs(parseInt(display.value))).toString();
}
// //1/x function
function oneByNum():void
{
    const display  = document.getElementById('result')! as  HTMLInputElement;
    display.value = (1 / parseInt(display.value)).toString();
}
// //x power 2 => x square
 function square():void
 {
     const display = document.getElementById('result')! as  HTMLInputElement;
    display.value = (parseInt(display.value) * parseInt(display.value)).toString()
 }

//  //square root
 function squareroot():void
 {
    const display = document.getElementById('result')! as  HTMLInputElement;;
    display.value = (Math.sqrt(parseInt(display.value))).toString();
 }

//  //10 power x
 function powByX():void
 {
    const display = document.getElementById('result')! as  HTMLInputElement;
    display.value = (Math.pow(10, parseInt(display.value))).toString();

 }
 //logarithm 
 function logx()
 {
    const display  = document.getElementById('result') ! as  HTMLInputElement;
    display.value = (Math.log10(parseInt(display.value))).toString();
 }

// //Natural log
 function logNat():void
 {
    const display = document.getElementById('result')  ! as  HTMLInputElement;;
    display.value = Math.log(parseInt(display.value)).toString()
 }
//  //Factorial 
 function fact():void
 {
    const display = document.getElementById('result') as HTMLInputElement;
    let fact :number= 1;
    let num:number;
    for(let num=1 ; num <= parseInt(display.value);num++)
    {
        fact=fact*num; 

    }
    display.value=fact.toString();
}

// // //Trignometric function
 function trigno():void
 {
    var x = (document.getElementById('Trigonometry') as HTMLSelectElement).value
   
    const display= document.getElementById('result')! as HTMLSelectElement
    
    if(x=="sin")
       {
        //Only accept value between range of -1 to 1;
        let p  = Math.sin(parseInt(display.value)*Math.PI/180);
        display.value = p.toFixed(2)
       }
       else if(x=="cos")
        {
            let q= Math.cos(parseInt(display.value)*Math.PI/180);
            display.value = q.toFixed(2);
        }
        else if(x=="tan")
        {
            let r = Math.tan(parseInt(display.value)*Math.PI/180);
            display.value = r.toFixed(2);
        }
       
}



//  //Functions //Asin and Acos can covert value in radian
 function func():void
 {
    
    var x = (document.getElementById('Function') as HTMLSelectElement).value
    const display  = document.getElementById('result')! as HTMLSelectElement
        if(x=="asin")
        {
            let p  = Math.asin(parseFloat(display.value));
            display.value = p.toFixed(2);
        }
        else if(x=="acos")
        {
            let b= Math.acos(parseFloat(display.value));
             display.value = b.toFixed(2);
        }
        
       else if(x=="floor")
       {
            display.value = Math.floor(parseInt(display.value)).toString();
       }
}



//  //+/- function
 function plusminus():void
 {
    let display = document.getElementById('result')  ! as  HTMLInputElement;
    let y =parseInt(display.value)* -1;
    display.value = y.toString();
 }
//  //DEG Function
 function deg():void
 {
    let display = document.getElementById('result') ! as  HTMLInputElement; 
    display.value = (parseInt(display.value) * Math.PI/180 ).toFixed(2) ;
}
 
// // Memory Clear
function MemoryClear():void
{
    memory = 0 ;
    let display = document.getElementById('result')! as  HTMLInputElement;
    display.value = memory.toString();
    console.log(memory);
}
// //Memory read //also use any datatype;
function MemoryRead():void
{
    let display:any= document.getElementById('result') ! as  HTMLInputElement
    display.value =  memory ;
    console.log(display.value)
}

// //Add in memory
function MemoryAdd():void
{
    let display= document.getElementById('result') ! as  HTMLInputElement
    memory =   memory + eval(display.value);
    console.log(memory)
}

// //Minus in memory
function MemoryMinus():void
{
    let display = document.getElementById('result')! as  HTMLInputElement
    memory =   memory-parseFloat(eval(display.value))
    console.log(memory)
}
// //Save in memory
function MemorySave():void
{
    let display = document.getElementById('result') ! as  HTMLInputElement
    memory =parseFloat(display.value);
    console.log(memory);

}

// //F-E function + also used to conver string to number
function toExpo():void
{
    let display = document.getElementById('result') ! as  HTMLInputElement

    let x = (+display.value).toExponential()
    display.value = x;
}

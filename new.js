let setfor;
function hidden(){

    let optioninputtt = document.querySelectorAll(".options")
    let submitbtn = document.querySelector(".submitbtn")
    optioninputtt[0].style.visibility = "hidden"
    optioninputtt[1].style.visibility = "hidden"
    optioninputtt[2].style.visibility = "hidden"
    optioninputtt[3].style.visibility = "hidden"
    submitbtn.style.visibility="hidden"
    
}
hidden();
function visible(){

    let optioninputtt = document.querySelectorAll(".options")
    let submitbtn = document.querySelector(".submitbtn")
    optioninputtt[0].style.visibility = "visible"
    optioninputtt[1].style.visibility = "visible"
    optioninputtt[2].style.visibility = "visible"
    optioninputtt[3].style.visibility = "visible"
    submitbtn.style.visibility="visible"
    
}
function hiddenqq(){
    let username = document.querySelector(".username")
    username.style.visibility="hidden"
    let lebel = document.querySelector(".enter")
    lebel.style.visibility="hidden"
    let set = document.querySelectorAll(".set");
    set[0].style.visibility="hidden" 
    set[1].style.visibility="hidden" 
    set[2].style.visibility="hidden" 
    set[3].style.visibility="hidden" 
    set[4].style.visibility="hidden" 
    set[5].style.visibility="hidden" 


}

function setselector(){
  document.querySelectorAll(".set").forEach(button =>{
    button.addEventListener('click',()=>{
        let firedbtn = button.value;
        setfor = firedbtn;
        console.log(firedbtn)
        console.log(typeof firedbtn)
        if(firedbtn === "set1"){
            console.log("hgbvf")
            loadqueset1();
        }
        else if(firedbtn === "set2"){
            console.log("hello")
            loadqueset2();
        }
        else if(firedbtn ==="set3"){
            console.log("hello")
        }
        firedbtn = null;
        
    })
    firedbtn = null;
    
  })


}


// let username = document.getElementById("username")
// console.log(username);

let set1 = [
    {que : "which keyword is used to create a variable in js",
        a:"var",
        b:"string",
        c:"int",
        d:"boolean",
    correct:"a"},
    {que : "founder of javascript",
    a:"tim barners lii",
    b:"denish ritchie",
    c:"james ghosling",
    d:"branden eich",
correct:"d"},
{que : "how can a datatype be declared to be a constant type",
a:"let",
b:"const",
c:"var",
d:"constant",
correct:"b"},
{que : "Which type of JavaScript language is",
a:"Object-Oriented",
b:"Object Based",
c:"Assembly",
d:"high-level",
correct:"b"},
{que : " The function and  var are known as:",
a:"keywords",
b:"Data types",
c:"Declaration statements",
d:"prototypes",
correct:"c"},
{que : "Which one of the following is the correct way for calling the JavaScript code",
a:"preprocessor",
b:"triggering event",
c:"RMI",
d:"function/method",
correct:"d"},
{que : "Which of the following type of a variable is volatile",
a:"mutable variable",
b:"dynamic variable",
c:"volatile variable",
d:"immutable variable",
correct:"a"},
{que : "Which of the following option is used as hexadecimal literal beginning?",
a:"00",
b:"0x",
c:"0X",
d:"both 0x and 0X)",
correct:"d"},
{que : "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
a:"prints an exeption error",
b:"prints an overflow error",
c:"displays infinity",
d:"prints the value as such",
correct:"c"},
{que : "In the JavaScript, which one of the following is not considered as an error:",
a:"syntax error",
b:"missing of semicolons",
c:"division by zero",
d:"missing of bracket",
correct:"c"},
]

 
let index =0;
const queboxset2 = document.getElementById("quebox");
const optioninputset2 = document.querySelectorAll(".options");
let total =set1.length;
 right = 0,wrong = 0;
const loadqueset2 = ()=>{
    hiddenqq();
    visible();
    reset2();
    const data = set2[index];
   
    queboxset2.innerText = ` ${index+1} )${data?.que}`;
    optioninputset2[0].nextElementSibling.innerText = data?.a;
    optioninputset2[1].nextElementSibling.innerText = data?.b;
    optioninputset2[2].nextElementSibling.innerText = data?.c;
    optioninputset2[3].nextElementSibling.innerText = data?.d;
}



let set2 = [
    {que : "which of the method is used to get HTML element in javascript",
        a:"getElementbyId()",
        b:"getElementByClassName()",
        c:"both a and b",
        d:"none of the above",
    correct:"c"},
    {que : "How do we put Javascript inside HTML?",
    a:"<js>",
    b:"<javascript>",
    c:"<scripting>",
    d:"<script>",
correct:"d"},
{que : "Which of the following is not a javascript framework?",
a:"Vue",
b:"React",
c:"Node",
d:"laravel",
correct:"d"},
{que : " Which one is not a comparison operator?",
a:"=",
b:"<",
c:">",
d:"!>",
correct:"a"},
{que : "Which symbol is used separate JavaScript statements?",
a:"comma",
b:"colon",
c:"hyphen",
d:"semicolon",
correct:"d"},
{que : "Which event is related to the keyboard?",
a:"onfocus",
b:"onclick",
c:"onkeydown",
d:"onkeypress",
correct:"d"},
{que : "Which on is not a mouse event?",
a:"onmouseover",
b:"onmousemove",
c:"onclick",
d:"onmousescroller",
correct:"d"},
{que : " what is the opposite of onmouseover?",
a:"onmouseoff",
b:"onnmouseunder",
c:"onmouseout",
d:"onnotmouseover",
correct:"onmouseover"},
{que : " How to check the number of elements inside the HTML form?",
a:"document.from.element.count",
b:"document.form.count",
c:"document.form.length",
d:"document.form.element.length",
correct:"c"},
{que : "Which javascript method returns the string starting at the specified position?",
a:"substr()",
b:"getsubstring",
c:"slice()",
d:"none of the above",
correct:"a"},
]



const queboxset1 = document.getElementById("quebox");
const optioninputset1 = document.querySelectorAll(".options");
 total =set2.length;
 right = 0,wrong = 0;
const loadqueset1 = ()=>{
    hiddenqq();
    visible();
    reset2();
    const data = set1[index];
    
    queboxset1.innerText = ` ${index+1} )${data.que}`;
    optioninputset1[0].nextElementSibling.innerText = data.a;
    optioninputset1[1].nextElementSibling.innerText = data.b;
    optioninputset1[2].nextElementSibling.innerText = data.c;
    optioninputset1[3].nextElementSibling.innerText = data.d;
}

const submit = ()=>{
     if(setfor == "set1"){
           submitset1();
     }
     if(setfor == "set2"){
          submitset2();
     }
     if(setfor == "set3"){

     }
}


const submitset1 = ()=>{
    const data = set1[index];
     const ans = getansset1()
      if(ans === data.correct){
           right++;
      }
      else{
        wrong++
      }
      index++;
      loadqueset1(); 
      return;

}
const submitset2 = ()=>{
    const data = set2[index];
     const ans = getansset2()
      if(ans === data.correct){
           right++;
      }
      else{
        wrong++
      }
      index++;
      loadqueset2(); 
      return;

}

 const getansset1 =()=>{
       optioninputset1.forEach((input)=>{
        if(input.checked){
            return input.value
        }
       })
}
const getansset2 =()=>{
    optioninputset2.forEach((input)=>{
     if(input.checked){
         return input.value
     }
    })
}
const reset1 = ()=>{
    optioninputset1.forEach((input)=>{
        input.checked=false;
    })
    
}
const reset2 = ()=>{
   
    optioninputset2.forEach((input)=>{
        input.checked=false;
    })
}


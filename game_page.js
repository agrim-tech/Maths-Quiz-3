var name1, name2;
var score1 = Number(0);
var score2 = Number(0);
var number1, number2, operator, answer;
var uestion,input,button;

name1 = localStorage.getItem("quizname1");
name2 = localStorage.getItem("quizname2");
document.getElementById("name1").innerHTML = name1;
document.getElementById("name2").innerHTML = name2;
document.getElementById("questionturn").innerHTML = name1;
document.getElementById("answerturn").innerHTML = name2;
document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;
console.log(name1);
console.log(name2);

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    operator = document.getElementById("operator").value;
    console.log(operator);
    setcorrectanswer();

    question ="<h3 class='libre-franklin'>"+number1+"&nbsp;"+operator+"&nbsp;"+number2+"</h3>";
    input = "<input id='answer' type='number' class='form-control libre-franklin col-lg-4 col-md-5 col-sm-7 col-xs-10' placeholder='Enter Answer'><br>";
    button = "<button class='btn btn-info libre-franklin' onclick='check()'>Check</button>"
    row = question + input + button;

    document.getElementById("question-area").innerHTML=row;

    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";
}

function setcorrectanswer() {
    if (operator == "+") {
        answer = Number(number1) + Number(number2);
    } 
    if (operator == "-") {
        answer = Number(number1) - Number(number2);
    }
    if (operator == "*") {
        answer = Number(number1) * Number(number2);
    }
    if (operator == "/") {
        answer = Number(number1) / Number(number2);
    }
    console.log("Answer is "+answer)
}
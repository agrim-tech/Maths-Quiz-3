var name1;
var name2;
function start(){
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    localStorage.setItem("quizname1" ,name1);
    localStorage.setItem("quizname2" ,name2);
    window.location = "game_page.html";
}
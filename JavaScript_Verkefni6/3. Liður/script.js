var questionEl = document.createElement("H1");
var questionText = document.createTextNode("Spurning 1");
questionEl.setAttribute("id", "question");
questionEl.appendChild(questionText);

var answers = document.createElement("DIV");
answers.setAttribute("id", "answers");

var answer1 = document.createElement("DIV");
answer1.setAttribute("class", "answer");
var text1 = document.createTextNode("Svarmoguleiki 1");
answer1.appendChild(text1);

var answer2 = document.createElement("DIV");
answer2.setAttribute("class", "answer");
var text2 = document.createTextNode("Svarmoguleiki 2");
answer2.appendChild(text2);



document.body.appendChild(questionEl);
document.body.appendChild(answers);

document.getElementById("answers").appendChild(answer1);
document.getElementById("answers").appendChild(answer2);

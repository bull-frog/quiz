/*{
	"qId": "001",
	"question": "世界には「ミッキー」といった単位が存在しますが、何を測る単位でしょう？",
	"imgUrl": "",
	"options": ["テーマパークの大きさ", "パソコンのマウスの移動距離", "ハツカネズミの群れの数", "蒸気船の舵の大きさ"],
	"corA": 1,
	"comment": ""
}*/

const questions = ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010"];
var questionNumber = 0;
var currentQuestion;

var userId;

window.onload = function() {
	
	let userId = localStorage.getItem("userId");
	if (userId) {
		alert("Welcome, " + localStorage.getItem("nickname"));
	} else {
		location.href = "register/";
	}

}

function nextQuestion() {
	fetchQuestion(questions[questionNumber]);
	document.getElementById("title").textContent = "クイズ #" + questions[questionNumber];
	questionNumber++;
}

function questionOnLoad() {
	console.log(currentQuestion);

	let questionLabel = document.getElementById("question");
	questionLabel.textContent = currentQuestion.question;

	let image = document.getElementById("image");
	if (currentQuestion.imgUrl == "") {
		image.setAttribute("style", "height:0;");
	} else {
		image.setAttribute("style", "height: 40vh; width: 80vw;");
		image.setAttribute("src", currentQuestion.imgUrl);
	}

	let optionsDiv = document.getElementById("options");
	optionsDiv.innerHTML = "";
	
	for (var i = 0; i < currentQuestion.options.length; i++) {
		let button = document.createElement("button");
		button.textContent = currentQuestion.options[i];
		button.optionIndex = i;
		button.onclick = function() {
			onOptionSelected(button.optionIndex);
		}
		optionsDiv.appendChild(button);
	}

}

function fetchQuestion(qId) {
	
	let requestURL = "https://raw.githubusercontent.com/bull-frog/personal/main/q" + qId + ".json";
	let request = new XMLHttpRequest();
	request.open("GET", requestURL);
	request.responseType = "json";
	request.send();

	request.onload = function() {
		currentQuestion = request.response;
		questionOnLoad();
	}

}

function onOptionSelected(optionIndex) {
	console.log(optionIndex);
	if (currentQuestion.corA == optionIndex) {
		alert("正解！");
	} else {
		alert("残念！");
	}
	nextQuestion();
}
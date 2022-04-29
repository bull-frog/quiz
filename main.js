/*{
	"qId": "001",
	"question": "世界には「ミッキー」といった単位が存在しますが、何を測る単位でしょう？",
	"imgUrl": "",
	"options": ["テーマパークの大きさ", "パソコンのマウスの移動距離", "ハツカネズミの群れの数", "蒸気船の舵の大きさ"],
	"corA": 1,
	"comment": ""
}*/


var currentQuestion;

function nextQuestion() {
	fetchQuestion("001");
}

function questionOnLoad() {
	console.log(currentQuestion);

	let questionLabel = document.getElementById("question");
	questionLabel.textContent = currentQuestion.question;

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
}
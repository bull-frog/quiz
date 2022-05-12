// 問題データを管理するプログラム

/*
var currentQuestion = {
	"qId": "001",
	"question": "世界には「ミッキー」といった単位が存在しますが、何を測る単位でしょう？",
	"imgUrl": "",
	"options": ["テーマパークの大きさ", "パソコンのマウスの移動距離", "ハツカネズミの群れの数", "蒸気船の舵の大きさ"],
	"corA": 1,
	"comment": "",
	"aveTime": 200
}
*/

// コース
var couse;

// qIdの配列
var questions;

// 上の配列のうち、次は何番目か
var questionNumber = 0;

// 取得したJSONオブジェクトが入る。フォーマットは上の通り
var currentQuestion;


// 次の質問へ移動
function nextQuestion() {

	section_answer.classList.add("fadeOut");
	window.scrollTo(0, 0);
	document.getElementById("qnumber").textContent = "第" + (questionNumber + 1) + " / " + questions.length + "問"

	// サーバーにリクエストを送信
	let requestURL = "https://raw.githubusercontent.com/bull-frog/personal/main/q" + questions[questionNumber] + ".json";
	let request = new XMLHttpRequest();
	request.open("GET", requestURL);
	request.responseType = "json";
	request.send();

	request.onload = function() {
		currentQuestion = request.response;
		// 次の問題を画面に表示する
		displayNextQuestion();
		setTimeout(() => {
			section_answer.classList.add("gone");
			section_question.classList.remove("gone");
			section_question.classList.remove("fadeOut");
			setTimeout(() => {
				resetAndStartTimer();
			}, 200);
		}, 200);
	}

	questionNumber++;
}

// 質問はまだ残っているか？
function questionDoesRemain() {
	return (questionNumber < questions.length);
}
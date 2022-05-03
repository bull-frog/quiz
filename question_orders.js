// 問題データを管理するプログラム

/*
var currentQuestion = {
	"qId": "001",
	"question": "世界には「ミッキー」といった単位が存在しますが、何を測る単位でしょう？",
	"imgUrl": "",
	"options": ["テーマパークの大きさ", "パソコンのマウスの移動距離", "ハツカネズミの群れの数", "蒸気船の舵の大きさ"],
	"corA": 1,
	"comment": ""
}
*/

// qIdの配列
var questions = ["001", "002", "003", "004", "005", "006", "007", "008", "009", "010"];

// 上の配列のうち、次は何番目か
var questionNumber = 0;

// 取得したJSONオブジェクトが入る。フォーマットは上の通り
var currentQuestion;


// 次の質問へ移動
function nextQuestion() {

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
		section_question.classList.add("coverScreen");
		section_question.classList.remove("gone");
		// タイマーを起動する
		resetAndStartTimer();
	}

	questionNumber++;
}

// 質問はまだ残っているか？
function questionDoesRemain() {
	return (questionNumber < questions.length);
}

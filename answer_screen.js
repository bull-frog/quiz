// 正解画面を表示するプログラム

// 正解画面を表示
function displayAnswer(index) {
	
	let score = checkScore(index);

	let header = document.getElementById("answer_header");
	let correctanswer_label = document.getElementById("answer_correctanswer");
	let comment_label = document.getElementById("answer_comment");

	if (score > 0) {
		header.textContent = "正解！";
	} else {
		header.textContent = "不正解！";
	}
	correctanswer_label.textContent = "正解は「" + currentQuestion.options[currentQuestion.corA] + "」です。"
	comment_label.textContent = currentQuestion.comment + score + "点_" + getTimerValue() +  "ms";

}
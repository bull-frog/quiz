// 正解画面を表示するプログラム

// 正解画面を表示
function displayAnswer(index) {
	
	let score = checkScore(index);

	let answericon = document.getElementById("answericon");
	let header = document.getElementById("judge");
	let comment_label = document.getElementById("comment");
	let timelabel = document.getElementById("time");
	let scorelabel = document.getElementById("score");

	document.getElementById("nextbutton").disabled = false;

	if (score > 0) {
		header.textContent = "正解！";
		answericon.setAttribute("src", "../img/ok.png");
		comment_label.textContent = currentQuestion.comment;
		timelabel.textContent = Math.round(getTimerValue() / 100) / 10;
		scorelabel.textContent = score;
	} else {
		header.textContent = "不正解";
		answericon.setAttribute("src", "../img/ng.png");
		comment_label.textContent = "正解は【" + currentQuestion.options[currentQuestion.corA] + "】です。\n\n" + currentQuestion.comment;
		timelabel.textContent = Math.round(getTimerValue() / 100) / 10;
		scorelabel.textContent = score;
	}

	window.document.onkeydown = function(event){
		if (event.key === 'Enter') {
			closeAnswer();
		} else {
			// 何もしない
		}
	}

}
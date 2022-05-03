// 問題画面を表示するプログラム

// 次の問題を表示する
function displayNextQuestion() {

	// H1に問題文を表示
	document.getElementById("question_sentence").textContent = currentQuestion.question;

	// 画像がある場合、表示する
	let image = document.getElementById("question_image");
	if (currentQuestion.imgUrl == "") {
		image.classList.add("gone");
	} else {
		image.classList.remove("gone");
		image.setAttribute("src", currentQuestion.imgUrl);
	}

	// 選択肢を表示する
	let optionList = document.getElementById("question_optionlist");
	optionList.innerHTML = "";//前問の選択肢ボタンを全て消す
	for (var i = 0; i < currentQuestion.options.length; i++) {
		let button = document.createElement("button");
		button.textContent = currentQuestion.options[i];
		button.classList.add("quizOption");
		button.optionIndex = i;
		button.onclick = function() {
			onSelectOption(button.optionIndex);
		}
		optionList.appendChild(button);
	}
 
}
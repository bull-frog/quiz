// 問題画面を表示するプログラム

// ボタンのカラー順
const colors = ["blue", "red", "green", "yellow"];

// 次の問題を表示する
function displayNextQuestion() {

	// H1に問題文を表示
	document.getElementById("question_sentence").textContent = currentQuestion.question;

	document.getElementById("avetime").textContent = Math.round((currentQuestion.aveTime || 10000) / 100) / 10;

	// 画像がある場合、表示する
	let image = document.getElementById("question_image");
	if (currentQuestion.imgUrl == "") {
		image.classList.add("gone");
	} else {
		image.classList.remove("gone");
		image.setAttribute("src", currentQuestion.imgUrl);
	}

	// 選択肢を表示する
	let optionList = document.getElementById("options");
	optionList.innerHTML = "";//前問の選択肢ボタンを全て消す
	for (var i = 0; i < currentQuestion.options.length; i++) {
		let button = document.createElement("button");
		button.textContent = currentQuestion.options[i];
		button.classList.add("quizoption");
		button.classList.add(colors[i % 4]);
		button.optionIndex = i;
		button.onclick = function() {
			onSelectOption(button.optionIndex);
		}
		optionList.appendChild(button);
	}

	window.document.onkeydown = function(event){
		if (0 < event.key && event.key <= currentQuestion.options.length) {
			console.log("valid key input: '" + event.key + "'");
			onSelectOption(event.key - 1);
		} else {
			// 何もしない
		}
	}
}
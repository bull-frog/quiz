var section_start;
var section_question;
var section_answer;

window.onload = function() {
	console.log("This is called");
	let userId = localStorage.getItem("userId");
	if (userId) {
		nickname = localStorage.getItem("nickname");
		alert("Welcome, " + nickname + "!");
	} else {
		// location.href = "./register/index.html";
	}

	section_start = document.getElementById("section_start");
	section_question = document.getElementById("section_question");
	section_answer = document.getElementById("section_answer");

}

// スタート画面で、「START」ボタンが押されたとき
function startQuiz() {
	section_start.classList.remove("coverScreen");
	section_start.classList.add("gone");
	nextQuestion();
}

// 問題が選択されたとき
function onSelectOption(index) {
	section_question.classList.remove("coverScreen");
	section_question.classList.add("gone");
	section_answer.classList.add("coverScreen");
	section_answer.classList.remove("gone");
	displayAnswer(index);
}

// 問題画面で、「OK」ボタンが押されたとき
function closeAnswer() {
	if (questionDoesRemain()) {
		// 次の問題へ
		section_answer.classList.remove("coverScreen");
		section_answer.classList.add("gone");
		nextQuestion();
	} else {
		alert("総スコアは" + totalScore() + "点でした。おめでとうございます");
	}
}
// 得点を記録するプログラム

// 点数のリスト = [0,1,3,1,0,・・・・]
var scoreList = new Array();

// 採点し、追加する
function checkScore(index) {

	let score;
	if (index == currentQuestion.corA) {
		score = calculateScore();
	} else {
		score = 0;
	}
	
	scoreList.push(score);
	return score;

}


// 時間に応じて、（もし今正解した場合の）スコアを計算
function calculateScore() {

	// 得点の計算方法は暫定。
	const normal_time = (currentQuestion.aveTime || 10000);

	let time = getTimerValue();
	let score = 200 - 95.5 * Math.atan(0.000348 * time);
	return Math.round(score);
	
}

// 今までの総スコア
function totalScore() {

	let total = 0;
	for (let i = 0; i < scoreList.length; i++) {
		total += scoreList[i];
	}
	return total;

}
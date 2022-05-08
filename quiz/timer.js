// 解答時間を計測する

// タイマーを開始した時刻(ms)
let startTime;

// タイマーを終了した時刻(ms)
let endTime;

// タイマーを0から開始する
function resetAndStartTimer() {
	endTime = undefined;
	startTime = (new Date()).getTime();
	console.log("Timer started: startTime = " + startTime);
}

// タイマーの経過時間を取得する(ms)
function getTimerValue() {
	console.log("Timer ended: startTime = " + startTime);
	console.log("Timer started: endTime = " + endTime);
	if (startTime) {
		if (endTime) {
			return endTime - startTime;
		} else {
			return (new Date()).getTime() - startTime;
		}
	} else {
		return -1;
	}
}

// タイマーを停止する
function stopTimer() {
	endTime = (new Date()).getTime();
}


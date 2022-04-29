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
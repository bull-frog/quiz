// BODY内にid「fader」を持つ場合、その要素をフェードアウトさせてから次のページへ遷移する。
function transit(toUrl) {
	document.getElementsByClassName("fader")[0].classList.add("fadeOut");
	setTimeout(() => {
		location.href = toUrl;
	}, 200);
}
function ans(){
	try {
		//get question
	q = document.querySelector("#version-4\\.22\\.5271028 > ttr-root > ttr-root-app > div > mat-sidenav-container > mat-sidenav-content > div > section > ttr-garage > ttr-game-holder > div > div.game.game-holder-inner.ng-star-inserted > div.pedal-holder > ttr-game-footpedal > section.width-100 > section > section > ttr-game-question > span").innerHTML;
	//split for digestion
	text = q.split(" ");
	// understand
		if (q.includes("÷")) {
			no1 = text[1];
			op = text[2].split("<!---->")[1];
			no2 = text[3];
		} else {
			no1 = text[1];
			op = text[3].split("<!---->")[0];
			no2 = text[4];
		}
		//init ans var
		answer = "";
		//answer q
		if (op == "×") {
			answer = parseInt(no1) * parseInt(no2);
		}
		if (op == "÷") {
			answer = parseInt(no1) / parseInt(no2);
		}
		//format
		answer = String(answer);
		nol = answer.split('');
		//enter
		for (let i = 0; i < nol.length; i++){
			simulateKeydown (48 + parseInt(nol[i]), false, false, false);
		}
		simulateKeydown (13, false, false, false);} catch {console.log("Help!");}
}
function simulateKeydown (keycode,isCtrl,isAlt,isShift){
	var e = new KeyboardEvent( "keydown", { bubbles:true, cancelable:true, char:String.fromCharCode(keycode), key:String.fromCharCode(keycode), shiftKey:isShift, ctrlKey:isCtrl, altKey:isAlt } );
        Object.defineProperty(e, 'keyCode', {get : function() { return this.keyCodeVal; } });     
        e.keyCodeVal = keycode;
        document.dispatchEvent(e);
}
function iamdaone() {
	// timeout for wait between answers
  setTimeout(() => { iamdaone(); }, 200);
  //answer
  ans();
}
//run
setTimeout(() => {
document.getElementById("0").addEventListener("click", () => {iamdaone() });}, 1000)
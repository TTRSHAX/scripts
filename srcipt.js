var run = false;

function ans() {
    try {
        //get question
        q = document.getElementsByClassName("notranslate height-100 noselect current")[0].innerHTML;
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
        for (let i = 0; i < nol.length; i++) {
            simulateKeydown(48 + parseInt(nol[i]), false, false, false);
        }
        simulateKeydown(13, false, false, false);
    } catch {}
}

function simulateKeydown(keycode, isCtrl, isAlt, isShift) {
    var e = new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        char: String.fromCharCode(keycode),
        key: String.fromCharCode(keycode),
        shiftKey: isShift,
        ctrlKey: isCtrl,
        altKey: isAlt
    });
    Object.defineProperty(e, 'keyCode', {
        get: function() {
            return this.keyCodeVal;
        }
    });
    e.keyCodeVal = keycode;
    document.dispatchEvent(e);
}

function iamdaone() {
    //answer
    if (run) ans();
}

function genRand(min, max) {
    return (Math.random() * (max - min) + min);
}

setInterval(() => {
    iamdaone();
}, 250);

setTimeout(() => {
    document.getElementById("0").addEventListener("click", () => {
        run = !run
    }, false);
	console.log("HI");
}, 500);

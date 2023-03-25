var run = false;
var repete = false;

function ans() {
  try {
    //get question
    q = document.getElementsByClassName(
      "notranslate height-100 noselect current"
    )[0].innerHTML;
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
    nol = answer.split("");
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
    altKey: isAlt,
  });
  Object.defineProperty(e, "keyCode", {
    get: function () {
      return this.keyCodeVal;
    },
  });
  e.keyCodeVal = keycode;
  document.dispatchEvent(e);
}

function iamdaone() {
  //answer
  if (run) ans();
}

function genRand(min, max) {
  return Math.random() * (max - min) + min;
}

setInterval(() => {
  iamdaone();
}, 225);

setTimeout(() => {
  document.getElementById("0").addEventListener(
    "click",
    () => {
      run = !run;
    },
    false
  );
  document.getElementById("1").addEventListener("click", () => {
    repete = !repete;
  });
}, 500);
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

setInterval(() => {
  if (
    checkVisible(
      document.querySelector(
        "#version-4\\.22\\.5271028 > ttr-root > ttr-root-app > div > mat-sidenav-container > mat-sidenav-content > div > section > ttr-garage > ttr-game-holder > div > div > ttr-game-results-details > div > div.flex.flex-col.w-full.justify-center.items-center > div > div.flex-col.max-w-500.flex > div.flex.flex-row.mt-8.stamp > button.flex.w-full.ml-2.max-w-50.items-center.z-50.p-2.md\\:p-4.md\\:py-6.rounded-md.text-white.text-xl.md\\:text-2xl.bg-green-600.play-button.stamp.truncate.ng-star-inserted"
      )
    ) &&
    repete
  ) {
    document
      .querySelector(
        "#version-4\\.22\\.5271028 > ttr-root > ttr-root-app > div > mat-sidenav-container > mat-sidenav-content > div > section > ttr-garage > ttr-game-holder > div > div > ttr-game-results-details > div > div.flex.flex-col.w-full.justify-center.items-center > div > div.flex-col.max-w-500.flex > div.flex.flex-row.mt-8.stamp > button.flex.w-full.ml-2.max-w-50.items-center.z-50.p-2.md\\:p-4.md\\:py-6.rounded-md.text-white.text-xl.md\\:text-2xl.bg-green-600.play-button.stamp.truncate.ng-star-inserted"
      )
      .click();
  }
}, 500);

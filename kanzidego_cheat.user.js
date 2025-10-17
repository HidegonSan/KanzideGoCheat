// ==UserScript==
// @name        KanzideGo Show Answer
// @match       https://html5.plicy.net/GamePlay/155561*
// @grant       unsafeWindow
// @version     0.0.1
// @author      Hidegon
// @description Show answer
// ==/UserScript==


(function() {


document.addEventListener('keydown', async function(event) {
  if (event.key + event.location === 'Shift2') {
    let answer = $gameVariables._data[9].toString();
    if (!("Notification" in window)) return
    if (Notification.permission === "granted") {
      const notification = new Notification(answer)
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((e) => {
        if (e === "granted") {
          const notification = new Notification(answer)
        }
      });
    }
  }
});


})()

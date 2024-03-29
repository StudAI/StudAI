var storage = chrome.storage.local; // the storage where data is saved.
var state, links, time, totalSeconds; // local vars that hold storage values

setDefault();
setInterval(setTime, 1000);
setInterval(checkSite, 500);

/*
 * Function: blockSite();
 * Description: It will update the active tab with the HTML page showing that
 * the page is blocked.
 */
function blockSite() {
  chrome.tabs.update({ url: "../html/blockedSite.html" });
}

/*
 * Function: setDefault();
 * Description: It will set the array to block major social media websites and
 * it will save it into the local storage.
 */
function setDefault() {
  console.log("Set the default");
  storage.set({
    links: [
      "facebook.com",
      "youtube.com",
      "twitter.com",
      "linkedin.com",
      "instagram.com",
    ],
  });
  storage.set({ time: 0 });
  storage.set({ distractions: 0 });
}

/*
 * Function: setTime();
 * Description: It will take the data from the local storage and increase
 * the number of seconds by 1. And set the final number into the local
 * storage. This will be called every time a second is passed.
 */
function setTime() {
  chrome.storage.local.get(["state", "time"], function (data) {
    // Gets data from the local storage
    state = data.state;
    totalSeconds = data.time;

    // if not active productive session, then reset the session.
    if (!state) {
      totalSeconds = 0;
      return;
    }
    totalSeconds++;

    storage.set({ time: totalSeconds });
  });
}

/*
 * Function: checkSite()
 * Description: It takes in the current tab and checks if its in the list
 * of blocked websites. If it is not part of the list, then it does nothing
 * and returns. If it is, then we redirect the user to the blockedSite.html.
 */
function checkSite() {
  chrome.storage.local.get(
    ["state", "links", "distractions", "time"],
    function (data) {
      function randomNum() {
        Math.floor(Math.random() * 100) + 1;
      }

      // Gets the data from the local storage
      state = data.state;
      links = data.links;
      time = data.time;
      distractions = data.distractions;
      // If not active productive session, then continue as normal.
      if (!state) return;

      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        if (tabs.length == 0) return;
        let url = tabs[0].url;
        if (url.includes("html/blockedSite.html")) return;
        // checks every entry for a blocked URL.
        for (index = 0; index < links.length; index++) {
          // check if there is a URL and if it should be blocked
          if (url && url.includes(links[index])) {
            blockSite();
          }
        }
      });
    }
  );
}

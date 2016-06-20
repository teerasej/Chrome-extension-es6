/*jslint node: true */
'use strict';


document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({
        currentWindow: true
    }, function(tabs) {

      // tabs is all opened tabs in window
        console.log(tabs[0].url);
    })
})

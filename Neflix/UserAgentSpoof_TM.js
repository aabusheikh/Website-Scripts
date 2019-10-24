// ==UserScript==
// @name         UserAgentSpoof
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Spoof user agent
// @author       bbpgrs
// @match        https://www.netflix.com/watch/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Safari on Mac OS
    var ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15"
    Object.defineProperty(navigator, 'userAgent', {
        get: function () { return ua; }
    });
})();

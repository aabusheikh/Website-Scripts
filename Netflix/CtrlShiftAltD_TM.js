// ==UserScript==
// @name         CtrlShiftAltD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simulate CTRL+SHIFT+ALT+D on right-click
// @author       bbpgrs
// @match        https://www.netflix.com/watch/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        var evt = new KeyboardEvent('keydown', {
            'keyCode':68, // D
            'which':68,
            'ctrlKey':true,
            'altKey':true,
            'shiftKey':true,
            'bubbles':true,
            'view':window
        });
        document.dispatchEvent(evt);;

        return false;
    }, false);
})();

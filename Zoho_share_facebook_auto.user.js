// ==UserScript==
// @name         Zoho Share to Facebook
// @namespace    https://tugatech.com.pt/
// @version      1.0
// @description  Auto-select the Facebook option in the Zoho Share extension
// @author       djprmf
// @include      https://social.zoho.com/social/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    ReachSocialShare.PublishPost.switchEditorTab("fbPage_header",false);
}, false);


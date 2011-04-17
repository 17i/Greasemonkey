// ==UserScript==
// @name           gakujoAutoLogin
// @namespace      http://17i.sakura.ne.jp/
// @description    AutoLogin for Gakujo-system.
// @include        https://gakujo.shizuoka.ac.jp/portal/init.do?userDivision=2&locale=ja
// ==/UserScript==


(function(){
	document.getElementsByName("loginID")[0].value='dankogai'; 
	document.getElementsByName("password")[0].value='kogaidan'; 
	document.getElementsByName("loginForm")[0].submit();
})();

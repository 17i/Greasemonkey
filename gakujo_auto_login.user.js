// ==UserScript==
// @name gakujoAutoLogin
// @namespace http://17i.sakura.ne.jp/
// @description AutoLogin for Gakujo-system.
// @include https://gakujo.shizuoka.ac.jp/portal/init.do?userDivision=2&locale=ja
// ==/UserScript==

(function inputID(){
if(GM_getValue("gakuban") == undefined){
hoge1 = prompt("IDを入力","");
GM_setValue("gakuban", hoge1);
}
})();

(function inputPASS(){
if(GM_getValue("pass") == undefined){
hoge2 = prompt("passを入力","");
GM_setValue("pass", hoge2);
}
})();

(function(){
document.getElementsByName("loginID")[0].value=GM_getValue("gakuban");
document.getElementsByName("password")[0].value=GM_getValue("pass");
document.getElementsByName("loginForm")[0].submit();
})();

(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))t(A);new MutationObserver(A=>{for(const e of A)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function i(A){const e={};return A.integrity&&(e.integrity=A.integrity),A.referrerPolicy&&(e.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?e.credentials="include":A.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(A){if(A.ep)return;A.ep=!0;const e=i(A);fetch(A.href,e)}})();$(document).ready(function(){$(".item1").click(function(c){c.preventDefault(),$(".mainPic").css({background:"url(data:image/jpeg;base64,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)"})}),$(".item2").click(function(c){c.preventDefault(),$(".mainPic").css({background:"url(../images/shelter/1/2.png) center center no-repeat","background-size":"cover"})}),$(".item3").click(function(c){c.preventDefault(),$(".mainPic").css("background","url(../images/shelter/1/3.png) center center no-repeat").css("background-size","cover")}),$(".item4").click(function(c){c.preventDefault(),$(".mainPic").css("background","url(../images/shelter/1/4.jpg) center center no-repeat").css("background-size","cover")})});
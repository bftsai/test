(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();$(document).ready(function(){$(".item1").click(function(r){r.preventDefault(),$(".mainPic").css({background:"url(https://www.ncaa.org/images/2023/3/30/MBB-WBB_BallHoop.JPG?width=1884&quality=80&format=jpg) center center no-repeat"})}),$(".item2").click(function(r){r.preventDefault(),$(".mainPic").css({background:"url(http://ncaaorg.sidearmsports.com/common/controls/image_handler.aspx?thumb_id=14&image_path=/images/2021/2/16/National_Office_3.jpg) center center no-repeat","background-size":"cover"})}),$(".item3").click(function(r){r.preventDefault(),$(".mainPic").css("background","url(https://www.ncaa.org/images/2023/3/30/MBB-WBB_BallHoop.JPG?width=1884&quality=80&format=jpg) center center no-repeat").css("background-size","cover")}),$(".item4").click(function(r){r.preventDefault(),$(".mainPic").css("background","url(http://ncaaorg.sidearmsports.com/common/controls/image_handler.aspx?thumb_id=14&image_path=/images/2021/2/16/National_Office_3.jpg) center center no-repeat").css("background-size","cover")})});
import './assets/scss/all.scss';

$(document).ready(function () {
    $('.item1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css("background","url('../images/shelter/1/1.png') center center no-wrap").css("background-size","cover");
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css("background-image","url(../images/shelter/1/2.png)").css("background-position","center").css("background-repeat","no-repeat").css("background-size","cover");
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css("background","url(../images/shelter/1/3.png) center center no-wrap").css("background-size","cover");
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css("background","url(../images/shelter/1/4.jpg) center center no-wrap").css("background-size","cover");
    });
});

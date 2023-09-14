import './assets/scss/all.scss';

$(document).ready(function () {
    $('.item1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css({'background':'url(https://www.ncaa.org/images/2023/3/30/MBB-WBB_BallHoop.JPG?width=1884&quality=80&format=jpg) center center no-repeat'});
        //$("#d1").css({"background-image": "url(jtp.png)"});
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css({"background":"url(http://ncaaorg.sidearmsports.com/common/controls/image_handler.aspx?thumb_id=14&image_path=/images/2021/2/16/National_Office_3.jpg) center center no-repeat","background-size":"cover"});
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css("background","url(https://www.ncaa.org/images/2023/3/30/MBB-WBB_BallHoop.JPG?width=1884&quality=80&format=jpg) center center no-repeat").css("background-size","cover");
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').css("background","url(http://ncaaorg.sidearmsports.com/common/controls/image_handler.aspx?thumb_id=14&image_path=/images/2021/2/16/National_Office_3.jpg) center center no-repeat").css("background-size","cover");
    });
});

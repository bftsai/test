import './assets/scss/all.scss';

$(document).ready(function () {
    $('.item1').click(function (e) { 
        e.preventDefault();
        $('.mainPic').addClass('opacity-0');
        setTimeout(() => {
            $('.mainItem1').siblings().addClass('d-none');
            $('.mainItem1').removeClass('d-none');
            setTimeout(() => {
                $('.mainItem1').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $('.mainPic').addClass('opacity-0');
        setTimeout(() => {
            $('.mainItem2').siblings().addClass('d-none');
            $('.mainItem2').removeClass('d-none');
            setTimeout(() => {
                $('.mainItem2').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.item3').click(function (e) { 
        e.preventDefault();
        $('.mainPic').addClass('opacity-0');
        setTimeout(() => {
            $('.mainItem3').siblings().addClass('d-none');
            $('.mainItem3').removeClass('d-none');
            setTimeout(() => {
                $('.mainItem3').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
    $('.item4').click(function (e) { 
        e.preventDefault();
        $('.mainPic').addClass('opacity-0');
        setTimeout(() => {
            $('.mainItem4').siblings().addClass('d-none');
            $('.mainItem4').removeClass('d-none');
            setTimeout(() => {
                $('.mainItem4').removeClass('opacity-0');
            }, 0.01*1000);
        }, 0.3*1000);
    });
});

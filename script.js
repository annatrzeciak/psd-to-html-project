$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});
$(window).scroll(function () {
    if(this.scrollY>45){
        $('#navbar').css({
            marginTop:'0px',
            backgroundColor:'#fff'
        })
    }else{
        $('#navbar').css({
            marginTop:'45px',
             backgroundColor:'transparent'
        })
    }
})

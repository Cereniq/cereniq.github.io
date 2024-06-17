$(".nav-item").click(function () {
    $(".nav-item").each(function () {
        $(this).removeClass("active");
    });
    $(this).toggleClass("active");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(window).scroll(function () {

    if ($(this).scrollTop() < $('article[data-anchor="Esisanat"]').offset().top) {
        $('.nav-item').removeClass('active');
    }

    if ($(this).scrollTop() >= $('article[data-anchor="Esisanat"]').offset().top) {
        $('.nav-item').removeClass('active');
        $('.nav-item:eq(0)').addClass('active');
    }
    if ($(this).scrollTop() >= $('article[data-anchor="hankittuosaaminen"]').offset().top) {
        $('.nav-item').removeClass('active');
        $('.nav-item:eq(1)').addClass('active');
    }
    if ($(this).scrollTop() >= $('article[data-anchor="Osaamisennaytto"]').offset().top) {
        $('.nav-item').removeClass('active');
        $('.nav-item:eq(2)').addClass('active');
    }
    if ($(this).scrollTop() >= $('article[data-anchor="Reflektointi"]').offset().top) {
        $('.nav-item').removeClass('active');
        $('.nav-item:eq(3)').addClass('active');
    }

});

/* Responsiivinen navigaatio / mobiilinavi */
$('.nav-toggle').click(function (event) { //kun nappia klikataan
    event.stopPropagation();
    $("#navi").slideToggle(); //avaa & sulkee menun
    $('.nav-toggle').toggleClass("nav-toggle-open"); //lisää ja poistaa luokkaa menu napilta
    $('#navi').toggleClass("navigation-open"); //lisää ja poistaa luokan menulta
});

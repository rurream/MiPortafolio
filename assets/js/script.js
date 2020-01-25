
$(document).ready(function () {

    // Referencia: https://stackoverflow.com/questions/3714628/jquery-get-the-location-of-an-element-relative-to-window
    var marcoVisual = $(window);
    $(function () {
        var menu = $('#miNav');
        marcoVisual.scroll(function () {
            var divGatillador = $('#trabajos');
            var eTop = divGatillador.offset().top;
            var desplazamiento = marcoVisual.scrollTop()
            var dondeEsta = eTop - (desplazamiento);
            if ((menu.height() + 15) >= (dondeEsta)) {
                menu.css("background-color", "#775977");
                

                var fondoMenu = menu.height();
                var entero = divGatillador.css("height").split(".");
                var fondoDiv = (dondeEsta + parseInt(entero[0]));

                if ((fondoMenu + 15) >= fondoDiv) {
                    menu.css("background-color", "#660066");
                }
            } else {
                menu.css("background-color", "#660066");
            }
        });
    });



    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });




    $(function () {
        $("a.nav-link").click(function (event) {
    
            if (this.hash !== "") {
                event.preventDefault();
                var gato = this.hash;
                // console.log($(gato).offset().top);
                $(gato).offset().top
                $('html, body').animate({
                    scrollTop: ($(gato).offset().top - 45)
                }, 800);
            }
        });
    });




});








$(document).ready(function () {
    // var pos = $('#trabajos').scrollTop();
    // console.log("Valor de trabajos : " + pos);

    // var pos = $('#miNav').scrol
    // console.log("Valor de miNav : " + pos);

    // var marcoVisual = $(window);
    // marcoVisual.scroll(function(){
    //     // var posTrabajo = $('#trabajos').scrollTop();
    //     // console.log("Valor de trabajos : " + posTrabajo);

    //     //  console.log("Coordenadas: top: " + $('#trabajos').offset().top + 
    //     // ", left: " + $('#trabajos').offset().left);

    //     // var alto = $('#trabajos').offset().top;
    //     // if($('#miNav').height() > $('#trabajos').offset().top){
    //     //     console.log("Subió más alla del bottom del nav");
    //     // }

    //     // if (alto < 150){
    //     //     console.log("Subió más alla del bottom del nav");
    //     // }

    //     // console.log("algo2: " + $('#trabajos').position().top);


        

    // });










    // Referencia: https://stackoverflow.com/questions/3714628/jquery-get-the-location-of-an-element-relative-to-window
    var marcoVisual = $(window);
    $(function() {
        // var eTop = $('#trabajos').offset().top; //get the offset top of the element
        // log(eTop - $(window).scrollTop()); //position of the ele w.r.t window
        // console.log("Inicio: " + (eTop - $(window).scrollTop()));
      
        // $(window).scroll(function() { //when window is scrolled
        // //   log(eTop - $(window).scrollTop());
        // //   console.log("Movimiento: " + (eTop - $(window).scrollTop()));
        // });


        // if ($('#miNav').height() >= (eTop - $(window).scrollTop())){
        //     console.log("Cambio");
        // }else{
        //     console.log("Normal");
        // }

        var menu = $('#miNav');
        marcoVisual.scroll(function() { 
            var divGatillador = $('#trabajos');
            // var divGatillatorJS = document.getElementById('trabajos');
            var eTop = divGatillador.offset().top;
            var desplazamiento = marcoVisual.scrollTop()
            var dondeEsta = eTop - (desplazamiento);
            // console.log("#miNav: " + menu.height() + 
            // "  eTop: " + eTop + 
            // "  desplazamiento: " + desplazamiento + 
            // "  dondeEsta: " + dondeEsta);
            if ((menu.height() + 15) >= (dondeEsta)){
                // console.log("Cambio");
                // $('#separadorNav').css("display", "block");
                menu.css("background-color", "#775977");
                // if ((menu.height() + 15) >= (dondeEsta + (dondeEsta + divGatillador.outerHeight(true)))){
                // if ((menu.height() + 15) >= (dondeEsta + (dondeEsta + divGatillatorJS.offsetHeight))){
                    // if ((menu.height() + 15) >= (dondeEsta + (dondeEsta + divGatillatorJS.scrollHeight))){
                if ((menu.height() + 15) >= (dondeEsta + (dondeEsta + divGatillador.css("height")))){
                    menu.css("background-color", "#660066");
                }
            }else{
                // console.log("Normal");
                // $('#separadorNav').css("display", "none");
                menu.css("background-color", "#660066");
            }
        });

      });
    











    // $(function() {
    //     // var head = $('#head');
    //     $('#trabajos').scroll(function(event) {
    //         var pos = $('#trabajos').scrollTop();
    //         if (pos === 0) {
    //             // head.stop().animate({
    //             //     boxShadow: "none"
    //             // }, 'fast');
    //             console.log("cero");
    //         } else {
    //             // head.stop().animate({
    //             //     boxShadow: "0 8px 8px -5px #696868"
    //             // }, "fast");
    //             console.log("DISTINTO de cero");
    //         }
    //     });
    // });


    // var offset = $('#trabajos').offset();
    // var top = offset.top;
    // var left = offset.left;
    // console.log("Coordenadas: top: " + top + ", left: " + left);
    
});






// $('#my_div').scroll(function() {
// var pos = $('#my_div').scrollTop();
// if (pos == 0) {
//     alert('top of the div');
// }
// });
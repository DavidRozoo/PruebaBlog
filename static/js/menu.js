'use strict'
$(document).ready(function(){

    /* DOM menu */
    var btnServices = $('#ShowServicios');
    var services = $('#services');
    var btnMenu = $('#BtnMenu');
    var menu = $('#menu');

    var OpenMenu = false;

    /* DOM contacto */
    var btnContact = $('#contacto');
    var fondoOpaco = $('#pantallaNegra');
    var form = $('#formulario');

    if(screen.width > 1024){ // asignar un efecto distinto segun el tamaño de pantalla (evento hover para pantallas de computador y evento click para cellphones)
        function Shoow(){services.slideDown(500);}
        function Hidde(){services.slideUp(500);}
        btnServices.hover(Shoow,Hidde);
    }else{
        btnServices.click(function(){
            services.slideToggle(500);
        })
    }
    
    
    btnMenu.click(function(){ // evento para mostrar menu en mobiles
        OpenMenu = !OpenMenu;
        menu.toggle('blind',{direction:"horizontal"});
        if(OpenMenu){ // para agregar diferente icono 
            btnMenu.removeClass('icon-menu');
            btnMenu.addClass('icon-cross');
        }else{
            btnMenu.removeClass('icon-cross');
            btnMenu.addClass('icon-menu');
        }
    });

    
   

    $(window).resize(function(){ // para detectar redimesion de pantalla
        if($(window).width() > 610){ 
            menu.css('display','block');   // hacemos visible el menu cuando la pantalla es mayor a 610px
        }else{
            if(btnMenu.attr('class') == 'icon-menu'){ // cuando la pantalla es menor de 610px la visibilidad del menu dependen del icono del menu
                menu.css('display','none');
            }else{
                menu.css('display','block');
            }
            
        }
    })
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: false,
        stopAutoOnClick: false,
        pager: false,
        captions: true
    });


    btnContact.click(function(){
        fondoOpaco.show('fade','fast');
        form.show('scale','slow');
    })

    fondoOpaco.click(function(){
        $(this).hide('fade','slow');
        form.hide('scale','fast');
    });
});
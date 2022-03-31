$(document).ready(function (){
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll > 580) {
          var menu = $(".nav");
          menu.css({ position: "fixed" });
          menu.css({ width: "100%" });
          menu.css({ height: "115px" });
          menu.css({ transition: "all 300ms" });
          menu.css({ background: "#222222" });
          $(".nav a").css({ color: "#fff" });
          $(".logo").css({ color: "#fff" });
          menu.css({ "box-shadow": "rgba(0, 0, 0, 0.22) 6px 1px 1px" });
          menu.css({ "z-index": "100" });
          if(scroll > 580){
            var active = document.getElementsByClassName('active')
            var menuItems = $('.nav-menu-item');
            menuItems.css("color","#1ac2ea");
           
          }
          $("#services").css("transition","all 300ms");
          $("#services").css("top","700px");
          $(".contenedor-servicios")
            .css({ width: "90%" })
            .css("margin", "0px auto");
          function UnderlineHover() {
            $(this).css("text-decoration", "underline");
            menu.hover(UnderlineHover);
          }
        } 
        else {
          $(".nav").css({ position: "relative" });
          $(".nav").css({ background: "transparent" });
          $(".nav").css({ "box-shadow": "0 0 0" });
          $(".nav a").css({ color: "#fff" });
          $(".logo").css({ color: "#fff" });
        }

        if(scroll < 500){
            var menu = $(".nav");
            menu.css({ transition: "all 300ms" });
            menu.css({ position: "relative" });
        }
        
    })
})
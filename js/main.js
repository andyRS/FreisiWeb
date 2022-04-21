window.addEventListener('load', function () {

    /** Indicador de menu*/

    const secciones = document.querySelectorAll('.section')
    const menuItems = document.querySelectorAll('.nav-menu-item')

    const funcionObserverser = entries => {
        entries.forEach(entry => {
            if (entry.isInteresting) {
                const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
                itemActual.classList.add('active')
            }
        });
    }

    const observer = new IntersectionObserver(funcionObserverser, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    })

    secciones.forEach(seccion => observer.observe(seccion))

    //Header Scroll

    var menu = document.getElementById('menu')
    let logoMenu = document.getElementById('logo-menu')
    let link1 = document.getElementById('link-1')
    let link2 = document.getElementById('link-2')
    let link3 = document.getElementById('link-3')
    let link4 = document.getElementById('link-4')
    let link5 = document.getElementById('link-5')
    let WhatSapp = document.getElementById('whatssap')



    window.addEventListener('scroll', () => {
        var scroll = window.scrollY
        if (scroll > 10) {
            menu.style.backgroundColor = '#121212';
            logoMenu.style.color = '#fff';
            logoMenu.style.left = "-100px";
            link1.style.color = "#fff";
            link2.style.color = "#fff";
            link3.style.color = "#fff";
            link4.style.color = "#fff";
            link5.style.color = "#fff";
            WhatSapp.style.opacity = "1";

        } else {
            menu.style.backgroundColor = '#fff';
            logoMenu.style.color = '#444444';
            logoMenu.style.left = "100px";
            link1.style.color = "#444444";
            link2.style.color = "#444444";
            link3.style.color = "#444444";
            link4.style.color = "#444444";
            link5.style.color = "#444444";
            WhatSapp.style.opacity = "0";
        }
    })

    //Menu Hamburgesa
    document.querySelector(".bars__menu").addEventListener("click", animateBars);



    var line1__bars = document.querySelector(".line1__bars-menu");
    var line2__bars = document.querySelector(".line2__bars-menu");
    var line3__bars = document.querySelector(".line3__bars-menu");
    var container_menu = document.querySelector(".nav-menu")
    var menu = document.querySelector('#menu');
    var logo_Menu = document.getElementById("logo-menu");
    var btnMenuHamburg = document.querySelector(".btn-menu-hamb");
    if (btnMenuHamburg) {
        btnMenuHamburg.addEventListener("click", () => {
            menu.classList.toggle("mostrar-hei");
            logo_Menu.style.left="-4px !important";
            logo_Menu.classList.toggle("red");

        })
    }



    function animateBars() {
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
        container_menu.classList.toggle("menu__active");

    }




})
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



    window.addEventListener('scroll', () => {
        var scroll = window.scrollY
        if (scroll > 10) {
            menu.style.backgroundColor = '#121212'
            logoMenu.style.color = '#fff'
            logoMenu.style.left = "-100px";
            link1.style.color ="#fff"
            link2.style.color ="#fff"
            link3.style.color ="#fff"
            link4.style.color ="#fff"
            link5.style.color ="#fff"

        } else {
            menu.style.backgroundColor = '#fff'
            logoMenu.style.color = '#444444'
            logoMenu.style.left = "100px";
            link1.style.color ="#444444"
            link2.style.color ="#444444"
            link3.style.color ="#444444"
            link4.style.color ="#444444"
            link5.style.color ="#444444"
        }
    })


})
window.addEventListener('load',function(){
    
    /** Indicador de menu*/

    const secciones = document.querySelectorAll('.section')
    const menuItems = document.querySelectorAll('.nav-menu-item')

const funcionObserverser = entries =>{
    entries.forEach(entry => {
        if(entry.isInteresting){
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

    secciones.forEach(seccion =>observer.observe(seccion))


})


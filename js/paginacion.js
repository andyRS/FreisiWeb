window.addEventListener('load',()=>{
    var next = document.querySelector('.page-link-next');
    var contenido1 = document.querySelector('#content')
        next.addEventListener('click',function() {
            next.style.display='flex';
            contenido1.style.display='none';
    })
})
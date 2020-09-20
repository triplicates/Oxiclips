function courusel(){
    let list = document.querySelector('.courusel__list'),
    radio = document.querySelectorAll('.courusel__controls-input'),
    image = document.querySelectorAll('.courusel__list-image ');
    let width = image[0].clientWidth;
    radio[0].addEventListener('click', () => {
        slide(width - width)
    })
    radio[1].addEventListener('click', () => {
        slide(width)
    })
    radio[2].addEventListener('click', () => {
        slide(width * 2)
    })

    function slide(x){
        list.style.transform = `translateX(-${x}px)`
    }
}
courusel()
document.addEventListener('DOMContentLoaded', () => {

    openMenu = () => {
        document.querySelector('.search').classList.remove('active')
        document.querySelector('.menu').classList.toggle('active')
    }

    openSearch = () => {
        document.querySelector('.menu').classList.remove('active')
        document.querySelector('.search').classList.toggle('active')
    }


    window.addEventListener('click', e => {
        const target = e.target
        if (!(target).closest('.header__icons') && !(target).closest('.menu') && !(target).closest('.search')) {
            document.querySelector('.menu').classList.remove('active')
            document.querySelector('.search').classList.remove('active')
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            }
        }
    })

    scrollToEl = (id) => {
        let destination = $('#'+id).offset().top - 100;
        $('html, body').animate({ scrollTop: destination }, 600);
    }
})
$(document).ready(function(){
    
    $('.testimonial-carousel-wrap').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
    
});
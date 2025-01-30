document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.wp-block-cb-carousel');
    carousels.forEach(carousel => {
        const settings = carousel.dataset.slick ? JSON.parse(carousel.dataset.slick) : {};
        jQuery(carousel).slick(settings);
    });
});

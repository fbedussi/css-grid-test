var stickyElements = document.querySelectorAll('.promo, .siteHeader');

document.querySelector('#toggleSticky')
    .addEventListener('click', function(e) {
        [].forEach.call(stickyElements, function(el) {
            el.classList.toggle('sticky');
        })
    });

document.querySelector('#togglePromo')
    .addEventListener('click', function(e) {
        document.body.classList.toggle('promoOn')
    });


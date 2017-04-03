var stickyElements = Array.from(document.querySelectorAll('.promo, .siteHeader'));

document.querySelector('#toggleSticky')
    .addEventListener('click', e => stickyElements.forEach(el => 
        el.classList.toggle('sticky')
    ));

document.querySelector('#togglePromo')
    .addEventListener('click', e => document.body.classList.toggle('promoOn'));


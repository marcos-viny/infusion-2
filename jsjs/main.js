(function() {
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var carroselImg = new Carrosel({
        container: '.figure .figure-img',
        itens: 'figure',
        btnPreve: '.prev',
        btnNext: '.next'
    });

    var carroselImg = new Carrosel({
        container: '.text__div',
        itens: 'figure',
        btnPreve: '.prev',
        btnNext: '.next'
    });
})()
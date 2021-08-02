(function() {
    const btnMobile = document.getElementById('btn-mobile');

    function btnMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();

        const nav = document.getElementById('nav');

        nav.classList.toggle('ativado');

        const ativado = nav.classList.contains('ativado');

        event.currentTarget.setAttribute('aria-expanded', ativado);

        if (ativado) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        };
    };

    btnMobile.addEventListener('click', btnMenu);
    btnMobile.addEventListener('touchstart', btnMenu);
})();
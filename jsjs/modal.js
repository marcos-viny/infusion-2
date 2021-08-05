/*
//primeiro modo\ 1.1
(function() {
    function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {

            if (e.target.id === modalID || e.target.className === 'fechar') {
                modal.classList.remove('mostrar');
            };
        });
    };


    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        iniciaModal('modal-promocao');
    });

})();


//modo\1.2
(function() {
    function iniciaModal(modalID) {
        if (localStorage.fechaModal !== modalID) {
            const modal = document.getElementById(modalID);
            if (modal) {

                modal.classList.add('mostrar');
                modal.addEventListener('click', (e) => {

                    if (e.target.id === modalID || e.target.className === 'fechar') {
                        modal.classList.remove('mostrar');
                        localStorage.fechaModal = modalID;
                    };
                });
            };
        };
    };
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        iniciaModal('modal-promocao');
    });
})();
*/


//jeito com scroll
(function() {
    function iniciaModal(modalID) {
        if (localStorage.fechaModal !== modalID) {
            const modal = document.getElementById(modalID);
            if (modal) {

                modal.classList.add('mostrar');
                modal.addEventListener('click', (e) => {

                    if (e.target.id === modalID || e.target.className === 'fechar') {
                        modal.classList.remove('mostrar');
                        localStorage.fechaModal = modalID;
                    };
                });
            };
        };
    };
    const logo = document.querySelector('.logo');
    window.addEventListener('scroll', () => {
        if (getYscroll < logo) {
            iniciaModal('modal-promocao')
        }
    });

    function getYscroll() {
        return window.pageYOffset;
    };
})();
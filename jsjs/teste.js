function Carrosel(config) {
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;

    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens;

    this.btnPreve = (typeof config.btnPreve === 'string') ? this.container.querySelector(config.btnPreve) : config.btnPreve;

    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext;


    var _this = this;
    var _currentAtual = 0;

    init();

    function init() {
        var _show = _this.container.querySelectorAll('.show');
        Array.prototype.forEach.call(_show, function(sh) {
            sh.classList.remove('show');
        });
        _this.itens[0].classList.add('show');
        _this.btnNext.removeAttribute('style');
        _this.btnPreve.removeAttribute('style');

        eventosButton();
    }


    function eventosButton() {
        _this.btnNext.addEventListener('click', showNext);
        _this.btnPreve.addEventListener('click', showPreve);
    }


    function showNext() {
        _currentAtual++;
        showSlid();
    }


    function showPreve() {
        _currentAtual--;
        showSlid();
    }


    function showSlid() {
        var qtd = _this.itens.length;
        var slilde = _currentAtual % qtd;
        slilde = Math.abs(slilde);

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slilde].classList.add('show');
    };
};
/*
//modo__1.1//
(function() {
    const menuItem = document.querySelectorAll('.section a')
    menuItem.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
    })

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const to = document.querySelector(id).offsetTop;

        window.scroll({
            top: to - 150,
            behavior: "smooth",
        });
    };
})();
*/




//modo__1.2\vai funcionar em todos os browsers//
(function() {
    const menuItem = document.querySelectorAll('.section a')
    menuItem.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick)
    });

    function getScrollTopByHref(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    };

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getScrollTopByHref(event.target) - 150;

        scrollToPosition(to);
    };

    function scrollToPosition(to) {
        window.scroll({
            top: to,
            behavior: "smooth",
        });
    };
})();

/*
 * Smooth scroll animation;
 * @param {init} endX: destination x coordinate;
 * @param {init} endY: destination y coordinate;
 * @param {init} duration: animation in ms;
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const starty = window.scrolly || window.pageyOffset;
    const distanceX = endX - startX;
    const distancey = endY - starty;
    const startTime = new Date().getTime();
}




/*
//Meu jeito//

(function() {
    const menuItem = document.querySelector('.section a')
    menuItem.addEventListener('click', scrollToIdOnClick);

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const element = document.querySelector('#img').offsetTop;

        window.scroll({
            top: element - 150,
            behavior: "smooth",
        })

    }

})();
*/
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
        //window.scroll({
        // top: to,
        // behavior: "smooth",
        // });

        smoothScrollTo(0, to);
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
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    //Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        };
        window.scroll(newX, newY);
    }, 100 / 60); //60tps
};




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
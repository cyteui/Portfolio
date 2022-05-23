const menu = document.querySelector('.menu')
            const close = document.querySelector('.close')
            const nav = document.querySelector('nav')

            menu.addEventListener('click', () => {
                nav.classList.add('open-nav')
            })

            close.addEventListener('click', () => {
                nav.classList.remove('open-nav')
            })

new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['section1', 'section2', 'section3', 'section4'],
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});

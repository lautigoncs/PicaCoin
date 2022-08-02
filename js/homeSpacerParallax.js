const firstConectorTop = document.getElementById('firstSpacerParallax5');
const firstConectorMid1 = document.getElementById('firstSpacerParallax4');
const firstConectorMid2 = document.getElementById('firstSpacerParallax3');
const firstConectorMid3 = document.getElementById('firstSpacerParallax2');
const firstConectorBottom = document.getElementById('firstSpacerParallax1');
const secondConnecttor = document.getElementById('homeAbout');
let spacerScrollValue = window.scrollY;


//Tengo que poner este event listener porque si no la animación del header se enoja 😡.
window.addEventListener('scroll', function(){
    spacerScrollValue = window.scrollY;
    firstConectorTop.style.transform = 'translateY(' + -spacerScrollValue / 1.5 + 'px)';
    firstConectorMid1.style.transform = 'translateY(' + -spacerScrollValue / 2 + 'px)';
    firstConectorMid2.style.transform = 'translateY(' + -spacerScrollValue / 2.5 + 'px)';
    firstConectorMid3.style.transform = 'translateY(' + -spacerScrollValue / 3 + 'px)';
    firstConectorBottom.style.transform = 'translateY(' + -spacerScrollValue / 5 + 'px)';

    secondConnecttor.style.transform = 'translateY(' + spacerScrollValue / 4 + 'px)';
});

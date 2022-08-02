const header = document.getElementById('header');
const aboutSection = document.querySelector('.headerLightSection');

const aboutSectionObserver = new IntersectionObserver 
(function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.remove('headerLight');
        } else { 
            header.classList.add('headerLight');
        }
    })
});

aboutSectionObserver.observe(aboutSection);
window.onscroll = () => {
    if (screen.width > 910) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('headerShrink');
        } else {
            header.classList.remove('headerShrink')
        }
    }
}
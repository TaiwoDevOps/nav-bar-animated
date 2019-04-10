const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        // Toggle Nav
        nav.classList.toggle('nav-active');

          // Animate Links 
        navlinks.forEach((links, index) => {
            if(links.style.animation){
                links.style.animation = ''
            } else {
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();

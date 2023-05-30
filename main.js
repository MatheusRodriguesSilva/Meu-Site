const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navLinks');
  const navLinks = document.querySelectorAll('.navLinks li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navActive');

    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });

    burger.classList.toggle('toggleOpenClose');
  });
}

navSlide();
const navScroll = new SmoothScroll('nav ul li a[href*="#"]', {
  speed: 800
});

const projectBtnScroll = new SmoothScroll('header div a[href*="#"]', {
  speed: 2300
});

const navLogo = new SmoothScroll('nav div a[href*="#"]', {
  speed: 1200
});
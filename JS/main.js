new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActive: 'swiper-pagination-bullet-active',
    clickable: true,
  },
});

const heroSubtitle = document.querySelector('.hero-subtitle');
const heroTitle = document.querySelector('.hero-title');
const heroDescription = document.querySelector('.hero-description');
const heroAvatar = document.querySelector('.hero-avatar');
const heroButton = document.querySelector('.hero-button');
const featuresItem = document.querySelectorAll('.features-item');
const sectionTitle = document.querySelector('.section-title');

if (document.body.clientWidth < 576) {
  heroSubtitle.classList.remove('wow');
  heroTitle.classList.remove('wow');
  heroDescription.classList.remove('wow');
  heroAvatar.classList.remove('wow');
  heroButton.classList.remove('wow');
  sectionTitle.classList.remove('wow');
  Array.from(featuresItem).forEach(item => {
    item.classList.remove('wow')
  });
}
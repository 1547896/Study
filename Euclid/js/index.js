const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});


document.querySelectorAll('.our-work-item-link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.our-work-item-link ').forEach(function (btn) {
      btn.classList.remove('our-work-item-link--active')
    });
    e.currentTarget.classList.add('our-work-item-link--active');
    document.querySelectorAll('.our-work__wrap').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('our-work__wrap--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('our-work__wrap--active');
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false
});
$(".ui-accordion-header").attr("tabindex", "0")

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form__show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form__show')
  })
  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})

let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav-link');
burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

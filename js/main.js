
(function () {
  // Бургеры=================================================================================================================================
  const burgerIcon = document.querySelector('.burger-icon')
  const body = document.body
  const bodyOpenedMenu = document.querySelector('.body--opened-menu')

  const openMenu = () => {
    body.classList.add('body--opened-menu')
  }
  const closeMenu = () => {
    body.classList.remove('body--opened-menu')
  }

  burgerIcon.addEventListener('click', openMenu)

  body.addEventListener('click', event => {
    const target = event.target
    if (target && event.target.classList.contains('body') || target.classList.contains('burger-icon') || target.classList.contains('nav__link')) {
      closeMenu()
    }
  })
  // Модальное окно=================================================================================================================================

  const btnOpen = document.querySelector('.about__img-button')
  const modal = document.querySelector('.modal')

  const openModal = () => {
    body.classList.add('body--opened-modal')
  }
  const closeModal = () => {
    body.classList.remove('body--opened-modal')
  }

  btnOpen.addEventListener('click', openModal)

  body.addEventListener('click', event => {
    const target = event.target
    if (target && event.target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
      closeModal()
    }
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body--opened-modal')) {
      closeModal()
    }
  })
  // Табы=================================================================================================================================

  const tabControls = document.querySelector('.tab-controls')

  const togleTab = (event => {

    const tabControl = event.target.closest('.tab-controls__link')

    if (!tabControl) return
    event.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    console.log(tabControl.getAttribute('href'))

    const tabContentId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentId)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
      activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
  })

  tabControls.addEventListener('click', togleTab)

  // Аккордеон=================================================================================================================================

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {

    el.addEventListener('click', (event) => {

      const accordionList = event.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = event.target.closest('.accordion-list__control');
      if (!accordionControl) return
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }

    });

  });
  // Слайдер-галерея=================================================================================================================================

  new Swiper('.gallery__slider', {

    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction'
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      }
    }

  });
  // Слайдер-отзывы=================================================================================================================================

  new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },

    breakpoints: {
      601: {

      },
      951: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.05,
      }
    }


  });
  // Маска для телефонаы=================================================================================================================================

  const telInputs = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs)

})()

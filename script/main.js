new Swiper(".main-hero__swiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 2.8,
    spaceBetween: 20,
});

document.addEventListener('DOMContentLoaded', function() {
  const modalOpen = document.querySelector('.anonim-modal__open')
  const modal = document.querySelector('.anonim-modal')

  const modalClose = modal.querySelector('.anonim-modal__close')
  const modalWrapper = modal.querySelector('.anonim-modal__wrapper')

  const handleOpenModal = () => {
      modal.classList.add('active')
  }

  const handleCloseModal = () => {
      modal.classList.remove('active')
  }
  
  modalOpen.addEventListener('click' , handleOpenModal)
  modalClose.addEventListener('click' , handleCloseModal)
  modal.addEventListener('click', handleCloseModal)
  modalWrapper.addEventListener('click', (e) => {
      e.stopPropagation()
  })
})
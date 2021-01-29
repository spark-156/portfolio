// Only run when ready
$(document).ready(function() {
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   type: "bullets",
    //   progressbarOpposite: true,
    //   // renderBullet: function (index, className) {
    //   //   let text = ["Luca Bergman", "Projects", "Contact"]
    //   //   return `<span class="${className}">${text[index]}</span>`;
    //   // },
    // }
  });      
});
// Animaciones
document.addEventListener("DOMContentLoaded", function () {
  // Animacion del Header
  gsap.from("header",
    {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    });

  // Animacion del logo
  gsap.from(".logo",
    {
      y: -50,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "bounce.out"
    });

  // Animacion de los links del navbar
  gsap.from(".navbar_link",
    {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "powe2.inOut",
      delay: 0.75
    });

  // Animacion del boton del header
  gsap.from(".buttons_group",
    {
      scale: 0,
      duration: 0.5,
      stagger: 0.3,
      ease: "elastic.out(1, 0.3)",
      delay: 1
    });

  // Animacion del contenido de inicio
  gsap.from(".content",
    {
      x: -100,
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      ease: "elastic.out(1, 0.3)",
      delay: 1.25
    });
})

 // Mostrar/ocultar menu
 let nav = document.querySelector(".navbar");
 let buttonMenu = document.querySelector(".btn_menu");

 buttonMenu.addEventListener("click", function () {
     nav.classList.toggle("active");
     changeIcon();
 });

 function changeIcon() {
     let iconBtnMenu = document.querySelector(".btn_menu i");

     if (iconBtnMenu.classList.contains("bx-menu-alt-right")) {
         iconBtnMenu.classList.remove("bx-menu-alt-right");
         iconBtnMenu.classList.add("bx-x");
     } else {
         iconBtnMenu.classList.remove("bx-x");
         iconBtnMenu.classList.add("bx-menu-alt-right");
     }
 }

 // Agregar event listener a cada enlace del menú
 let navLinks = document.querySelectorAll(".navbar_link");
 navLinks.forEach(link => {
     link.addEventListener("click", function () {
         nav.classList.remove("active");
         changeIcon();
     });
 });
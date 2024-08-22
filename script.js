const allproject = document.querySelectorAll(".project");
const previewImg = document.querySelector(".preview img");

 window.addEventListener("mousemove", function (e) {
   gsap.to(previewImg, {
     x: e.clientX + "px",
     y: e.clientY + "px",
     xPercent: -80,
     yPercent: -180,
     stagger: 0.05,
   });
 }); 

allproject.forEach((ele) => {
  ele.addEventListener("mouseenter", function () {
    const imgUrl = this.getAttribute("data-img");
    previewImg.src = imgUrl;
    previewImg.style.opacity = 1;
    previewImg.style.zIndex = 1;
  });
  ele.addEventListener("mouseleave", function () {
    previewImg.removeAttribute("src");
  });
});

//replaces yourElement's text with "This is the new text" over the course of 2 seconds
gsap.to(".all-about-me", {
  duration: 2,
  text: "This is the new text",
  ease: "none",
});
gsap.to(yourElement, {
  duration: 1,
  text: {
    value: "Your new text",
    newClass: "class2",
    delimiter: " ",
  },
});
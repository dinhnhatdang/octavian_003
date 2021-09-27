const closeMenuEl = document.querySelector(".menu-close") 
const menuEl = document.querySelector('.menu')
const toggleEl = document.querySelector('.toggle') 

closeMenuEl.addEventListener("click",function(){
  menuEl.style.display='none'
})

toggleEl.addEventListener('click', function(){
  menuEl.style.display="block"
})

// const scroller = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });
const cursor=document.querySelector('.cursor');
window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
document.querySelectorAll('a,.btn,.tile,.menu').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='32px';cursor.style.height='32px'});
  el.addEventListener('mouseleave',()=>{cursor.style.width='16px';cursor.style.height='16px'});
});
const reveal = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');reveal.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.release,.grid-section,.live,.shop,.tile,.show-card').forEach(el=>{el.classList.add('reveal');reveal.observe(el)});

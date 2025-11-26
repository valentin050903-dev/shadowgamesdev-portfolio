const els = document.querySelectorAll('.card');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.style.transform='translateY(0)', e.target.style.opacity=1;
  });
},{threshold:0.15});
els.forEach(el=>{
  el.style.transform='translateY(20px)'; el.style.opacity=0;
  el.style.transition='all .6s ease';
  obs.observe(el);
});

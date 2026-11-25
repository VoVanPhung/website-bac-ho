/* ===== animation.js — hiệu ứng khi cuộn (Intersection Observer) ===== */
(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=Array.prototype.slice.call(document.querySelectorAll('.rv,.tl-item,.stop,.quote,.timeline,.reveal-clip,.gc'));
  if(!('IntersectionObserver' in window)||reduce){ els.forEach(function(e){e.classList.add('in')}); return; }

  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  },{threshold:.15,rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){io.observe(e)});

  // Parallax nhẹ cho ảnh nền (chỉ chạy khi phần tử đang trong màn hình)
  var px=Array.prototype.slice.call(document.querySelectorAll('.hero-bg'));
  var vis=new Set(), ticking=false;
  var po=new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting?vis.add(e.target):vis.delete(e.target) }); update(); });
  px.forEach(function(e){po.observe(e.parentNode); e.parentNode._bg=e});
  function update(){
    vis.forEach(function(p){
      var bg=p._bg, r=p.getBoundingClientRect(), c=r.top+r.height/2-window.innerHeight/2;
      bg.style.transform='translate3d(0,'+(c*-0.12).toFixed(1)+'px,0)';
    });
    ticking=false;
  }
  window.addEventListener('scroll',function(){ if(!ticking){ticking=true;requestAnimationFrame(update)} },{passive:true});
})();

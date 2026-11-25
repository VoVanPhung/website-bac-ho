/* ===== main.js — điều hướng, lightbox, tiện ích ===== */
(function(){
  document.documentElement.classList.add('js');
  var $=function(s,c){return (c||document).querySelector(s)}, $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};

  // Hiệu ứng tải trang nhẹ
  var ld=$('.loader');
  function hideLoader(){ if(ld) ld.classList.add('done'); }
  window.addEventListener('load',function(){setTimeout(hideLoader,250)});
  setTimeout(hideLoader,2500);

  // Menu di động
  var burger=$('.burger'), menu=$('.menu');
  if(burger){
    burger.addEventListener('click',function(){
      var o=menu.classList.toggle('open'); burger.setAttribute('aria-expanded',o); burger.textContent=o?'✕':'☰';
      document.body.style.overflow=o?'hidden':'';
    });
  }

  // Chuyển trang mượt (mờ dần rồi chuyển)
  $$('a[href]').forEach(function(a){
    var h=a.getAttribute('href');
    if(!h||h.charAt(0)==='#'||/^(https?:|mailto:)/.test(h)||a.target==='_blank') return;
    a.addEventListener('click',function(e){
      if(e.ctrlKey||e.metaKey||e.shiftKey) return;
      e.preventDefault(); document.body.classList.add('leaving');
      setTimeout(function(){location.href=a.href},340);
    });
  });
  window.addEventListener('pageshow',function(e){ if(e.persisted) document.body.classList.remove('leaving'); });

  // Thanh tiến trình cuộn + hành trình 8 mốc + nút lên đầu trang
  var bar=$('.scrollbar'), cur=$('.journey i.cur'), top=$('.totop');
  var ticking=false;
  function onScroll(){
    var h=document.documentElement, max=h.scrollHeight-h.clientHeight, p=max>0?h.scrollTop/max:0;
    if(bar) bar.style.width=(p*100)+'%';
    if(cur) cur.style.setProperty('--p',(p*100)+'%');
    if(top) top.classList.toggle('show',h.scrollTop>700);
    ticking=false;
  }
  window.addEventListener('scroll',function(){ if(!ticking){ticking=true;requestAnimationFrame(onScroll)} },{passive:true});
  onScroll();
  if(top) top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

  // Ảnh lỗi → thông báo
  $$('img').forEach(function(im){
    function fail(){
      if(im.dataset.failed) return; im.dataset.failed=1;
      var d=document.createElement('div'); d.className='img-fail';
      d.textContent='Không tải được hình ảnh'+(im.alt?': '+im.alt:'')+'. Vui lòng kiểm tra lại đường dẫn tệp ảnh.';
      im.replaceWith(d);
    }
    im.addEventListener('error',fail);
    if(im.complete && im.naturalWidth===0 && im.getAttribute('src')) fail();
  });

  // Timeline tương tác: nhấn tiêu đề để thu/mở
  $$('.tl-item.pick').forEach(function(it){
    it.addEventListener('click',function(){ it.classList.toggle('collapsed'); });
  });

  // Lightbox
  var items=$$('[data-lb]'), lb=document.createElement('div'), idx=0;
  if(items.length){
    lb.className='lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-label','Xem ảnh lớn');
    lb.innerHTML='<button class="x" aria-label="Đóng">✕</button><button class="pv" aria-label="Ảnh trước">‹</button><button class="nx" aria-label="Ảnh sau">›</button><img alt=""><p></p>';
    document.body.appendChild(lb);
    var im=$('img',lb), pp=$('p',lb);
    var show=function(i){
      idx=(i+items.length)%items.length; var el=items[idx];
      im.src=el.dataset.lb; im.alt=el.dataset.alt||'';
      pp.innerHTML=(el.dataset.cap||'')+(el.dataset.src?'<small>'+el.dataset.src+'</small>':'');
    };
    var open=function(i){show(i);lb.classList.add('open');document.body.style.overflow='hidden'};
    var close=function(){lb.classList.remove('open');document.body.style.overflow=''};
    items.forEach(function(el,i){el.addEventListener('click',function(){open(i)})});
    $('.x',lb).onclick=close; $('.pv',lb).onclick=function(){show(idx-1)}; $('.nx',lb).onclick=function(){show(idx+1)};
    lb.addEventListener('click',function(e){if(e.target===lb)close()});
    document.addEventListener('keydown',function(e){
      if(!lb.classList.contains('open')) return;
      if(e.key==='Escape')close(); if(e.key==='ArrowLeft')show(idx-1); if(e.key==='ArrowRight')show(idx+1);
    });
  }
})();

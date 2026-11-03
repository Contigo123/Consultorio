const b=document.getElementById('burger'),p=document.getElementById('page');
b.addEventListener('click',()=>{const o=p.classList.toggle('menu-open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')});

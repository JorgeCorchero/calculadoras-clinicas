(function(){
  const KEY='cookie-consent';
  function inject(){
    if (document.getElementById('cookie-banner')) return;
    const bar=document.createElement('div');
    bar.id='cookie-banner';
    bar.style.position='fixed'; bar.style.bottom='16px'; bar.style.left='16px'; bar.style.right='16px';
    bar.style.background='#111827'; bar.style.color='#fff'; bar.style.padding='12px 16px'; bar.style.borderRadius='10px'; bar.style.boxShadow='0 10px 20px rgba(0,0,0,.2)'; bar.style.zIndex='9999';
    bar.innerHTML = '<div style="display:flex;gap:12px;align-items:center;justify-content:space-between;flex-wrap:wrap;">      <div style="max-width:680px">Usamos cookies para analítica y anuncios. Puedes aceptar o rechazar. <a href="privacy.html" style="color:#93c5fd">Más info</a>.</div>      <div style="display:flex;gap:8px;flex-shrink:0">        <button id="cc-accept" style="background:#2563eb;color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer">Aceptar</button>        <button id="cc-reject" style="background:#374151;color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer">Rechazar</button>      </div></div>';
    document.body.appendChild(bar);
    document.getElementById('cc-accept').onclick=()=>{localStorage.setItem(KEY,'yes'); location.reload();}
    document.getElementById('cc-reject').onclick=()=>{localStorage.setItem(KEY,'no'); document.getElementById('cookie-banner').remove();}
  }
  if (!localStorage.getItem(KEY)) window.addEventListener('load', inject);
  // Gate scripts (example for GA/AdSense): only run if consent yes
  window.cookieConsentGranted = function(){ return localStorage.getItem(KEY)==='yes'; }
})();

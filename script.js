const btn = document.getElementById('langBtn');
let lang = 'en';
function setLang(next){
  lang = next;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(lang === 'ar' ? 'data-ar' : 'data-en');
  });
  btn.textContent = lang === 'ar' ? 'English' : 'العربية';
}
btn.addEventListener('click',()=>setLang(lang==='en'?'ar':'en'));

const toggleBtn = document.getElementById('toggle-menu');

let hashChange = 0;

window.addEventListener('hashchange', e => {
   if (hashChange !== 0) {
      if (hashChange === 2) hashChange = 0;
      return;
   }
   e.stopImmediatePropagation();
   hashChange = 1;
   const hash = window.location.hash;
   window.location.hash = new URL(e.oldURL).hash;
   toggleBtn.checked = false;
   setTimeout(() => {
      window.location.hash = hash;
      hashChange = 2;
      if (window.matchMedia('screen and (max-width: 768px)').matches)
         document
            .querySelector(`.section[data-anchor="${hash.replace(/^#/, '')}"]`)
            ?.scrollIntoView({ behavior: 'smooth' });
   }, 120);
});

new fullpage('#fullpage', {
   navigation: true,
   responsiveWidth: 768,
});

toggleBtn.addEventListener('change', e => {
   if (e.target.checked) document.documentElement.scrollTop = 0;
   document.documentElement.style.overflowY = e.target.checked ? 'hidden' : 'scroll';
});

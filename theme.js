(function(){
  var key = 'school-theme';
  var root = document.documentElement;
  var icons = {
    dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.4v2.6M12 19v2.6M2.4 12h2.6M19 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9"/></svg>',
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 14.6A8.6 8.6 0 0 1 9.4 3.4a8.6 8.6 0 1 0 11.2 11.2Z"/></svg>'
  };

  try { root.dataset.theme = localStorage.getItem(key) || 'dark'; } catch(error) { root.dataset.theme = 'dark'; }

  function paint(){
    var dark = root.dataset.theme === 'dark';
    var label = dark ? 'Включить светлую тему' : 'Включить тёмную тему';
    document.querySelectorAll('[data-theme-toggle]').forEach(function(button){
      button.innerHTML = dark ? icons.dark : icons.light;
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', label);
      button.title = label;
    });
  }

  function toggle(){
    var fade = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(fade) root.classList.add('theme-fade');
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(key, root.dataset.theme); } catch(error) {}
    paint();
    if(fade) setTimeout(function(){ root.classList.remove('theme-fade'); }, 420);
  }

  document.addEventListener('DOMContentLoaded', function(){
    var nav = document.querySelector('.nav-menu');
    if(nav && !nav.querySelector('[data-theme-toggle]')){
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'theme-toggle';
      button.setAttribute('data-theme-toggle','');
      button.addEventListener('click', toggle);
      nav.appendChild(button);
    }
    paint();
  });
})();

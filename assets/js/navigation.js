    const menuButton = document.querySelector('.mobile-menu-toggle');
    const menuDrawer = document.querySelector('.mobile-drawer');
    const menuOverlay = document.querySelector('.mobile-overlay');
    const closeControls = document.querySelectorAll('[data-menu-close]');
    const drawerLinks = document.querySelectorAll('.drawer-nav a');
    function setMenu(open) {
      menuDrawer.classList.toggle('open', open);
      menuOverlay.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      menuDrawer.setAttribute('aria-hidden', String(!open));
      if (open) menuDrawer.querySelector('.drawer-close').focus();
      else menuButton.focus();
    }
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    closeControls.forEach(control => control.addEventListener('click', () => setMenu(false)));
    drawerLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false); });

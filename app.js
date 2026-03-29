// Vanilla JavaScript for MOVEON App landing page

// Example: Smooth scroll to sections or other interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log('MOVEON App landing page loaded');

    const burger = document.getElementById('mobile-burger');
    const menu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-close');

    function openMenu(){
        menu.classList.add('is-open');
        burger.classList.add('open');
        menu.setAttribute('aria-hidden','false');
        burger.setAttribute('aria-expanded','true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu(){
        menu.classList.remove('is-open');
        burger.classList.remove('open');
        menu.setAttribute('aria-hidden','true');
        burger.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
    }

    if(burger && menu){
        burger.addEventListener('click', function(){
            if(menu.classList.contains('is-open')) closeMenu(); else openMenu();
        });

        if(closeBtn){ closeBtn.addEventListener('click', closeMenu); }

        const links = menu.querySelectorAll('.mobile-link');
        links.forEach(l => l.addEventListener('click', closeMenu));

        menu.addEventListener('click', function(e){
            if(e.target === menu) closeMenu();
        });

        document.addEventListener('keydown', function(e){
            if(e.key === 'Escape') closeMenu();
        });
    }
});

// Placeholder for future features like animations or form handling
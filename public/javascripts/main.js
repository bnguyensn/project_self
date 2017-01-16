// .js file for the whole site

$(document).ready(function() {
    console.log('Page loaded.');

    let $window = $(window);

    // === MOBILE: NAVIGATION MENU === //

    let $navOverlayM = $('#nav-overlay-m');
    let $menuOpenBtn = $('#btn-menu');
    let $menuOpenVisual = $('#btn-menu-open');
    let $menuCloseVisual = $('#btn-menu-close');
    let isMenuOpen = false;

    $menuOpenBtn.click(function(e){
        e.stopPropagation();
        // This prevents the menu from closing immediately after the user clicks the menu button
        // The menu would close immediately due to event bubbling

        if(isMenuOpen) { console.log('Closing menu');
        } else { console.log('Opening menu'); }

        toggleMenu();
    });

    $window.on('click resize', function() {
        if(isMenuOpen) {
            toggleMenu();
            console.log('Menu closed from click / resize');
        }
    });

    function toggleMenu() {
        $navOverlayM.toggle();
        $menuOpenVisual.toggle();
        $menuCloseVisual.toggle();
        isMenuOpen = !isMenuOpen;
    }

    // === LEGACY CODE === //

});
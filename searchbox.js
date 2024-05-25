document.addEventListener('DOMContentLoaded', function() {
    // Hide the original magnifying glass toggle button
    var toggleButton = document.querySelector('.btn-open');
    if (toggleButton) {
        toggleButton.style.display = 'none';
    }

    // Ensure the search form is visible by default
    var searchForm = document.querySelector('#searchform-navbar');
    if (searchForm) {
        searchForm.classList.add('show');
        // Make sure it doesn't overlay
        searchForm.style.position = 'static';
        searchForm.style.display = 'flex';
        searchForm.style.alignItems = 'center';
        searchForm.style.maxWidth = 'none';
        searchForm.style.flex = '1 1 auto';
    }

    // Ensure the close button (X) does not collapse the search form
    var closeButton = document.querySelector('.btn-close');
    if (closeButton) {
        closeButton.addEventListener('click', function(event) {
            event.preventDefault();
        });
    }

    // Inject placeholder text into the search input
    var searchInput = document.querySelector('.searchform-navbar .form-control');
    if (searchInput) {
        searchInput.setAttribute('placeholder', 'Search');
        // Ensure input takes available space
        searchInput.style.flexGrow = '1';
        searchInput.style.marginLeft = '10px';
    }

    // Remove the d-none class from the navbar nav elements to make sure they are visible
    var navbarNav = document.querySelector('.navbar-nav');
    if (navbarNav) {
        navbarNav.classList.remove('d-none');
        navbarNav.style.display = 'flex';
        navbarNav.style.flex = '1 1 auto';
        navbarNav.style.alignItems = 'center';

        // Adjust the flex property of the search form to fit within
        var simpleSearchForm = document.querySelector('.navbar-nav .simplesearchform');
        if (simpleSearchForm) {
            simpleSearchForm.style.flexGrow = '1';
        }
    }

    // Ensure the primary navigation is visible by removing 'd-none' class
    var primaryNavigation = document.querySelector('.primary-navigation');
    if (primaryNavigation) {
        primaryNavigation.classList.remove('d-none');
    }  
});

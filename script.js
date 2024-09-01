document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeButton = menuIcon.querySelector('.close-btn');
    
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        menuIcon.classList.remove('active');
    });
    
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation(); 
        menuIcon.classList.toggle('active');
    });
    
    document.addEventListener('click', function() {
        menuIcon.classList.remove('active');
    });
});

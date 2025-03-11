document.addEventListener('DOMContentLoaded', function() {
    let loginButton = document.querySelector('.login_form button');
    let allContent = document.querySelector('.all_content');
    let logo = document.querySelector('.logo');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        allContent.style.display = 'none'; 
        logo.style.display = 'block'; 
    });
});
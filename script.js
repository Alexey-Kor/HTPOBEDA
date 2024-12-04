// Функция для переключения меню гамбургера
function toggleMenu() {
    var menu = document.getElementById('nav-list');
    var hamburger = document.querySelector('.hamburger');
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.classList.remove('active');
    } else {
        menu.style.display = 'block';
        hamburger.classList.add('active');
    }
}

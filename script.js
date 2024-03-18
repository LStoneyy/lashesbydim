function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function showTopButton() {
    console.log("Loaded");

    const toTop = document.querySelector('.totop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active')
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    showTopButton();
})
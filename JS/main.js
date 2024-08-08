// ACTION BOTON NAVBAR //
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}

const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Al cargar la página, revisa si hay un tema guardado en localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Ajusta el estado del checkbox según el tema guardado
toggle.checked = savedTheme === 'dark';

// Cambia el tema y guarda la preferencia en localStorage
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Elimina la clase "preload" después de un corto tiempo para permitir animaciones posteriores
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100); // 100ms para asegurar que la página esté completamente cargada
});
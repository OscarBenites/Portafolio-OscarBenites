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

// Selecciona los íconos por sus IDs
const themeToggleIcons = [
    document.getElementById('theme-ssoggle'),
    document.getElementById('themetwo')
];

const html = document.documentElement;

// Función para cambiar el tema
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Cambiar la clase del ícono según el nuevo tema
    themeToggleIcons.forEach(icon => {
        if (newTheme === 'dark') {
            icon.classList.replace('bx-sun', 'bx-moon');
        } else {
            icon.classList.replace('bx-moon', 'bx-sun');
        }
    });

    console.log(`Theme changed to: ${newTheme}`); // Verifica el cambio de tema
}

// Inicializa el tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Ajusta los íconos según el tema guardado
themeToggleIcons.forEach(icon => {
    if (savedTheme === 'dark') {
        icon.classList.replace('bx-sun', 'bx-moon');
    } else {
        icon.classList.replace('bx-moon', 'bx-sun');
    }
});

// Agrega el event listener a los íconos
themeToggleIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log('Icon clicked'); // Verifica que el click se detecte
        toggleTheme();
    });
});

// Elimina la clase "preload" después de un corto tiempo para permitir animaciones posteriores
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100); // 100ms para asegurar que la página esté completamente cargada
});


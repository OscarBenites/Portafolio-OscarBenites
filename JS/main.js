const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

// Cambio de icon en nav
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

// Cambio de icon flags
var IconFlag = document.getElementById("IconFlag");
var FL = document.getElementById("FlagLenguage");
var IconFlagclicks = 0;

function UpdateIconFlag() {
    IconFlagclicks = IconFlagclicks + 1;
    if (IconFlagclicks % 2 != 0) {
        IconFlag.setAttribute("src", "./img/us.svg");
       FL.dataset.lenguage = "en"
    }else{
        IconFlag.setAttribute("src", "./img/pe.svg");
        FL.dataset.lenguage = "es"
   }
}

//  Cambio lenguage
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML= texts[section][value];
    }
}

flagsElement.addEventListener("click" , (e)=> {
    changeLanguage(e.target.parentElement.dataset.lenguage);
});
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la recarga de la página
      // Lógica adicional aquí si necesitas
      console.log("Item del navbar clickeado");
    });
  });
// Selecciona los íconos por sus IDs
// Selecciona el ícono por su ID
const themeToggleIcon = document.getElementById('theme-ssoggle');

const html = document.documentElement;

// Función para cambiar el tema
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Cambiar la clase del ícono según el nuevo tema
    if (newTheme === 'dark') {
        themeToggleIcon.classList.replace('bx-sun', 'bx-moon');
    } else {
        themeToggleIcon.classList.replace('bx-moon', 'bx-sun');
    }
}

// Inicializa el tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Ajusta el ícono según el tema guardado
if (savedTheme === 'dark') {
    themeToggleIcon.classList.replace('bx-sun', 'bx-moon');
} else {
    themeToggleIcon.classList.replace('bx-moon', 'bx-sun');
}

// Agrega el event listener al ícono
themeToggleIcon.addEventListener('click', () => {
    toggleTheme();
});

// Elimina la clase "preload" después de un corto tiempo para permitir animaciones posteriores
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100); // 100ms para asegurar que la página esté completamente cargada
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
        IconFlag.setAttribute("src", "./img/pe-icon.png");
       FL.dataset.lenguage = "en"
    }else{
        IconFlag.setAttribute("src", "./img/us-icon.png");
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
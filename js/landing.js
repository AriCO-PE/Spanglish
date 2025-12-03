const translations = {
    es: {
        home: 'Inicio',
        about: 'Sobre Nosotros',
        methodology: 'Nuestra Metodología',
        admissions: 'Inscripciones',
        contact: 'Contacto',
        mainTitle: 'Bienvenido a SPANGLISH',
        mainText: 'Landing de prueba con header minimalista y elegante.'
    },
    en: {
        home: 'Home',
        about: 'About Us',
        methodology: 'Our Methodology',
        admissions: 'Admissions',
        contact: 'Contact',
        mainTitle: 'Welcome to SPANGLISH',
        mainText: 'Test landing with a minimalist and elegant header.'
    },
    ru: {
        home: 'Главная',
        about: 'О нас',
        methodology: 'Наша методика',
        admissions: 'Прием',
        contact: 'Контакт',
        mainTitle: 'Добро пожаловать в SPANGLISH',
        mainText: 'Тестовая лендинг-страница с минималистичным и элегантным заголовком.'
    }
};

const langSelect = document.getElementById('lang-select');

langSelect.addEventListener('change', () => {
    const lang = langSelect.value;

    // Actualizar navegación
    document.querySelectorAll('.nav a').forEach(link => {
        const key = link.dataset.key;
        link.textContent = translations[lang][key];
    });

    // Actualizar contenido principal
    document.getElementById('main-title').textContent = translations[lang].mainTitle;
    document.getElementById('main-text').textContent = translations[lang].mainText;
});




const videoCard = document.querySelector('.video-card');
const video = videoCard.querySelector('.video');



// Hover play/pause del video
videoCard.addEventListener('mouseenter', () => video.play());
videoCard.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
});



// Scroll reveal para la sección de cards
const cardsSection = document.querySelector('.cards-section');

function revealCardsOnScroll() {
    const sectionPos = cardsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 100) {  // cuando esté casi visible
        cardsSection.classList.add('show');
    }
}

// Ejecutar al hacer scroll y al cargar la página
window.addEventListener('scroll', revealCardsOnScroll);
window.addEventListener('load', revealCardsOnScroll);







const galleryVideosSection = document.querySelector('.gallery-videos-section');
const galleryVideos = document.querySelectorAll('.gallery-video');

// Scroll reveal
function revealGalleryVideosOnScroll() {
    const sectionPos = galleryVideosSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 100) {
        galleryVideosSection.classList.add('show');
    }
}

window.addEventListener('scroll', revealGalleryVideosOnScroll);
window.addEventListener('load', revealGalleryVideosOnScroll);

// Reproducir videos al pasar el mouse
galleryVideos.forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});





const modeBoxes = document.querySelectorAll(".mode-box");
const description = document.getElementById("mode-description");

const textos = {
    virtual: `
        Nuestras clases son <strong>100% virtuales</strong>, enfocadas en el desarrollo 
        de <strong>escucha y habla directa</strong>, un método efectivo que acelera tu 
        proceso de aprendizaje y te conecta con el idioma desde la primera sesión.
    `,
    horarios: `
        Nos adaptamos completamente a tus horarios. Puedes elegir 
        <strong>clases individuales</strong> o integrarte a grupos reducidos de 
        <strong>hasta 5 estudiantes</strong>. ¡Tú decides el ritmo y la intensidad!
    `
};

modeBoxes.forEach(box => {
    box.addEventListener("click", () => {

        // Remover selección actual
        modeBoxes.forEach(b => b.classList.remove("active"));

        // Activar el seleccionado
        box.classList.add("active");

        // Cambiar el texto
        const mode = box.dataset.mode;
        description.innerHTML = textos[mode];

        // Animación del texto
        description.classList.remove("show");
        setTimeout(() => description.classList.add("show"), 50);
    });
});




document.getElementById("invite-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const language = document.getElementById("language").value;

    const message = `
📘 *Nueva inscripción desde SPANGLISH*  
👤 Nombre: ${name}  
📱 Número: ${phone}  
🗣 Quiere aprender: ${language}
    `;

    const BOT_TOKEN = "AQUI_TU_TOKEN";
    const CHAT_ID = "AQUI_TU_CHAT_ID";

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
        })
    });

    alert("¡Tu inscripción fue enviada! Te contactaremos pronto.");
    e.target.reset();
});

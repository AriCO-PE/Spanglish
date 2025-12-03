const translations = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre Nosotros',
            methodology: 'Nuestra Metodología',
            admissions: 'Inscripciones',
            contact: 'Contacto'
        },
        main: {
            title: 'Bienvenido a SPANGLISH',
            text: 'Sumérgete en la Cultura Hispano Hablante'
        },
        cards: [
            {title: 'Maestros Nativos', text: 'Profesores de todo Latinoamérica para que puedas conocer más sobre la cultura Latina!'},
            {title: 'Clases en Inglés', text: 'Las clases son en Inglés para mejor comunicación entre alumno y maestro'},
            {title: 'Traductores', text: '¿No sabes Inglés? No hay problema, te brindamos un traductor para tus primeras lecciones'}
        ],
        modalidad: {
            title: 'Modalidad de Clases',
            virtual: 'Nuestras clases son <strong>100% virtuales</strong>, enfocadas en el desarrollo de <strong>escucha y habla directa</strong>, un método efectivo que acelera tu proceso de aprendizaje y te conecta con el idioma desde la primera sesión.',
            horarios: 'Nos adaptamos completamente a tus horarios. Puedes elegir <strong>clases individuales</strong> o integrarte a grupos reducidos de <strong>hasta 5 estudiantes</strong>. ¡Tú decides el ritmo y la intensidad!',
            default: 'Selecciona una opción para ver la información.'
        },
        sabores: {
            title: 'El rico sabor de ser Hispano',
            genres: ['Salsa', 'Bachata', 'Reggaetón', 'Urbana']
        },
        footer: {
            brandTitle: 'SPANGLISH',
            brandText: 'Aprende idiomas de forma moderna, práctica y 100% conversacional.',
            linksTitle: 'Enlaces',
            links: ['Inicio','Sobre Nosotros','Metodología','Inscripciones','Contacto'],
            socialTitle: 'Síguenos',
            copyright: '© 2025 SPANGLISH — Todos los derechos reservados.'
        }
    },
    en: {
        nav: {home: 'Home', about: 'About Us', methodology: 'Our Methodology', admissions: 'Admissions', contact: 'Contact'},
        main: {title: 'Welcome to SPANGLISH', text: 'Immerse yourself in the Hispanic Culture'},
        cards: [
            {title: 'Native Teachers', text: 'Teachers from all over Latin America to help you learn more about Latin culture!'},
            {title: 'Classes in English', text: 'Classes are in English for better communication between student and teacher'},
            {title: 'Translators', text: 'Don’t know English? No problem, we provide a translator for your first lessons'}
        ],
        modalidad: {
            title: 'Class Modes',
            virtual: 'Our classes are <strong>100% virtual</strong>, focused on developing <strong>listening and speaking skills</strong>, an effective method that accelerates your learning and connects you with the language from day one.',
            horarios: 'We fully adapt to your schedule. You can choose <strong>individual classes</strong> or join small groups of <strong>up to 5 students</strong>. You decide the pace and intensity!',
            default: 'Select an option to see information.'
        },
        sabores: {
            title: 'The Rich Flavor of Being Hispanic',
            genres: ['Salsa','Bachata','Reggaeton','Urban']
        },
        footer: {
            brandTitle: 'SPANGLISH',
            brandText: 'Learn languages in a modern, practical, and 100% conversational way.',
            linksTitle: 'Links',
            links: ['Home','About Us','Methodology','Admissions','Contact'],
            socialTitle: 'Follow Us',
            copyright: '© 2025 SPANGLISH — All rights reserved.'
        }
    },
    ru: {
        nav: {home: 'Главная', about: 'О нас', methodology: 'Наша методика', admissions: 'Прием', contact: 'Контакт'},
        main: {title: 'Добро пожаловать в SPANGLISH', text: 'Погрузитесь в испаноязычную культуру'},
        cards: [
            {title: 'Носители языка', text: 'Учителя со всей Латинской Америки, чтобы вы могли узнать больше о латиноамериканской культуре!'},
            {title: 'Занятия на английском', text: 'Занятия проходят на английском языке для лучшего общения между учеником и учителем'},
            {title: 'Переводчики', text: 'Не знаете английский? Не проблема, мы предоставим переводчика для первых занятий'}
        ],
        modalidad: {
            title: 'Формат занятий',
            virtual: 'Наши занятия <strong>100% виртуальные</strong>, сосредоточенные на развитии <strong>навыков аудирования и говорения</strong>, эффективный метод, который ускоряет ваш процесс обучения и подключает вас к языку с первой сессии.',
            horarios: 'Мы полностью подстраиваемся под ваше расписание. Вы можете выбрать <strong>индивидуальные занятия</strong> или присоединиться к небольшим группам <strong>до 5 студентов</strong>. Вы сами выбираете темп и интенсивность!',
            default: 'Выберите опцию, чтобы увидеть информацию.'
        },
        sabores: {
            title: 'Богатый вкус быть испаноязычным',
            genres: ['Сальса','Бачата','Реггетон','Урбан']
        },
        footer: {
            brandTitle: 'SPANGLISH',
            brandText: 'Изучайте языки современно, практично и 100% в разговорной форме.',
            linksTitle: 'Ссылки',
            links: ['Главная','О нас','Методика','Прием','Контакт'],
            socialTitle: 'Следите за нами',
            copyright: '© 2025 SPANGLISH — Все права защищены.'
        }
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

// Reproducir automáticamente al cargar la página
window.addEventListener('load', () => {
    video.play().catch(() => {
        // Algunos navegadores bloquean autoplay si no hay interacción
        console.log("Autoplay bloqueado, el usuario debe interactuar con la página");
    });
});

// Opcional: quitar animaciones de escala/transform si las tenías en CSS
videoCard.style.transform = 'scale(1)'; // asegura tamaño normal




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



// Mostrar la sección con scroll (fade-in)
function revealGalleryVideosOnScroll() {
    const sectionPos = galleryVideosSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 100) {
        galleryVideosSection.classList.add('show');

        // Animación individual para cada video
        galleryVideos.forEach((video, index) => {
            setTimeout(() => {
                video.classList.add('show');
            }, index * 150); // efecto escalonado
        });
    }
}

window.addEventListener('scroll', revealGalleryVideosOnScroll);
window.addEventListener('load', revealGalleryVideosOnScroll);

// Autoplay de 3 segundos al cargar + reproducción al hover
window.addEventListener('load', () => {
    galleryVideos.forEach(video => {
        video.volume = 0; // volumen bajo al 20%
        video.muted = true; // autoplay requiere mute en muchos navegadores
        video.play().catch(() => {
            console.log("Autoplay bloqueado, el usuario debe interactuar");
        });

        // Detener después de 3 segundos
        setTimeout(() => {
            video.pause();
            video.currentTime = 0;
        }, 2000);

        // Reproducir al pasar el cursor
        video.addEventListener('mouseenter', () => {
            video.muted = false; // opcional: quitar mute
            video.play();
        });

        // Pausar al quitar el cursor
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
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






const musicCards = document.querySelectorAll('.music-card');

musicCards.forEach(card => {
    const button = card.querySelector('.play-btn');
    const audio = card.querySelector('audio');

    button.addEventListener('click', () => {
        // Pausar todos los demás audios
        musicCards.forEach(c => {
            const a = c.querySelector('audio');
            if (a !== audio) {
                a.pause();
                a.currentTime = 0;
            }
        });

        // Reproducir o pausar el audio de esta carta
        if (audio.paused) {
            audio.play().catch(() => console.log("El navegador bloqueó la reproducción"));
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});
















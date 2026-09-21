/**
 * BENEATH - Sistema de Control y Navegación Institucional
 * Motor principal de interactividad para la interfaz de ciberseguridad
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("BENEATH Institutional Security Interface: Sistema inicializado correctamente.");

    // Banco de enlaces oficiales de YouTube para cada versión de idioma del video
    const videoLinks = {
        'en': 'https://www.youtube.com/watch?v=VToSuq-MXcA',
        'es': 'https://www.youtube.com/watch?v=jsipjkAwI5Y',
        'pt': 'https://www.youtube.com/watch?v=FH5fISc3d5s',
        'fr': 'https://www.youtube.com/watch?v=fYZyT8XCiOw',
        'de': 'https://www.youtube.com/watch?v=GMd5Q2mbybA',
        'it': 'https://www.youtube.com/watch?v=6CITvAB3Vh0',
        'ja': 'https://www.youtube.com/watch?v=J6AQzIwcJcY',
        'zh': 'https://www.youtube.com/watch?v=Wi7S6uUba1U',
        'ko': 'https://www.youtube.com/watch?v=IxYUZyQ8l_o',
        'ar': 'https://www.youtube.com/watch?v=ZmEzjDt-UVI',
        'tr': 'https://www.youtube.com/watch?v=IYIsG2QWIL4',
        'ru': 'https://www.youtube.com/watch?v=P8JxgPCUji8'
    };

    const videoSelector = document.getElementById('video-lang-selector');
    const videoLinkTag = document.querySelector('.video-card-link');
    const videoHeaderBadge = document.getElementById('video-header-badge');

    if (videoSelector && videoLinkTag) {
        videoSelector.addEventListener('change', function(e) {
            const selectedLang = e.target.value;
            if (videoLinks[selectedLang]) {
                videoLinkTag.href = videoLinks[selectedLang];
                
                // Actualiza el texto superior del módulo del video dinámicamente
                const langName = e.target.options[e.target.selectedIndex].text.split(' ')[0].toUpperCase();
                videoHeaderBadge.innerText = `COMPANY OVERVIEW - ${langName} VIDEO`;
                
                console.log(`Cambiando video institucional a idioma: ${selectedLang}`);
            }
        });
    }
});

/**
 * Controla la navegación modular del panel central de cristal
 * @param {string} section - Identificador de la sección institucional seleccionada
 */
function navigateTo(section) {
    console.log(`Navegando a la sección institucional: ${section}`);
    
    // Diccionario de rutas institucionales
    const institutionalRoutes = {
        'home': 'Vista general del búnker',
        'privacy': 'Protección de datos y privacidad',
        'compliance': 'Estándares de cumplimiento global (GDPR, COPPA, ONU)',
        'pricing': 'Esquemas de precios y niveles institucionales',
        'faq': 'Preguntas frecuentes para directivos',
        'support': 'Soporte ejecutivo y contacto directo',
        'secure': 'Modo seguro activado'
    };

    const menuGrid = document.querySelector('.menu-grid');
    const aboutView = document.getElementById('about-us-view');

    if (section === 'privacy') {
        // Oculta la cuadrícula de botones y muestra el panel de About Us
        if (menuGrid) menuGrid.style.display = 'none';
        if (aboutView) aboutView.style.display = 'block';
        
        if (typeof updateLanguageTranslations === 'function') {
            updateLanguageTranslations();
        }
    } else if (section === 'home') {
        // Oculta el panel de About Us y regresa la cuadrícula de botones
        if (aboutView) aboutView.style.display = 'none';
        if (menuGrid) menuGrid.style.display = 'grid';
    } else if (institutionalRoutes[section]) {
        console.log(`Cargando protocolo: ${institutionalRoutes[section]}`);
        alert(`Cargando sección: ${institutionalRoutes[section]}`);
    }
}

// --- CONTROLADOR DEL MODAL DE VIDEO FLOTANTE ---
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('youtubeIframe');
    const closeBtn = document.getElementById('closeVideoModal');

    // Función auxiliar para extraer el ID del video de YouTube
    function getYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    // Interceptar clics en los enlaces de video de la página
    document.querySelectorAll('a[href*="youtube.com"], a[href*="youtu.be"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            const videoId = getYouTubeId(href);

            if (videoId) {
                e.preventDefault();
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=0&hl=en&cc_lang_pref=none&iv_load_policy=3&modestbranding=1`;
                modal.style.display = 'flex';
            }
        });
    });

    // Función para cerrar el modal y apagar el video
    function closeModal() {
        modal.style.display = 'none';
        iframe.src = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });
});
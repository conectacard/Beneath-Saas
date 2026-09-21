/**
 * BENEATH - Sistema de Control y Navegación Institucional
 * Motor principal de interactividad para la interfaz de ciberseguridad
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("BENEATH Institutional Security Interface: Sistema inicializado correctamente.");
});

/**
 * Controla la navegación modular del panel central de cristal
 * @param {string} section - Identificador de la sección institucional seleccionada
 */
function navigateTo(section) {
    console.log(`Navegando a la sección institucional: ${section}`);
    
    // Diccionario de rutas institucionales para futura expansión de vistas
    const institutionalRoutes = {
        'home': 'Vista general del búnker',
        'privacy': 'Protección de datos y privacidad',
        'compliance': 'Estándares de cumplimiento global (GDPR, COPPA, ONU)',
        'pricing': 'Esquemas de precios y niveles institucionales',
        'faq': 'Preguntas frecuentes para directivos',
        'support': 'Soporte ejecutivo y contacto directo'
    };

    if (institutionalRoutes[section]) {
        // Espacio reservado para renderizar dinámicamente el contenido en pantalla
        console.log(`Cargando protocolo: ${institutionalRoutes[section]}`);
    }
}
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
                
                console.link(`Cambiando video institucional a idioma: ${selectedLang}`);
            }
        });
    }
});

function navigateTo(section) {
    console.log(`Navegando a la sección institucional: ${section}`);
    
    const institutionalRoutes = {
        'home': 'Vista general del búnker',
        'privacy': 'Protección de datos y privacidad',
        'compliance': 'Estándares de cumplimiento global (GDPR, COPPA, ONU)',
        'pricing': 'Esquemas de precios y niveles institucionales',
        'faq': 'Preguntas frecuentes para directivos',
        'support': 'Soporte ejecutivo y contacto directo'
    };

    if (institutionalRoutes[section]) {
        console.log(`Cargando protocolo: ${institutionalRoutes[section]}`);
    }
}
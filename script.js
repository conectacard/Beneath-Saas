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
    const complianceView = document.getElementById('compliance-view');
    const faqView = document.getElementById('faq-view');
    const supportView = document.getElementById('support-view');

    // Oculta todos los paneles por defecto
    if (menuGrid) menuGrid.style.display = 'none';
    if (aboutView) aboutView.style.display = 'none';
    if (complianceView) complianceView.style.display = 'none';
    if (faqView) faqView.style.display = 'none';
    if (supportView) supportView.style.display = 'none';

    if (section === 'privacy') {
        if (aboutView) aboutView.style.display = 'block';
    } else if (section === 'compliance') {
        if (complianceView) complianceView.style.display = 'block';
    } else if (section === 'faq') {
        if (faqView) faqView.style.display = 'block';
    } else if (section === 'support') {
        if (supportView) supportView.style.display = 'block';
    } else if (section === 'home') {
        if (menuGrid) menuGrid.style.display = 'grid';
        // Detiene el video incrustado del FAQ al volver al HOME
        const faqIframe = document.getElementById('faq-embedded-iframe');
        if (faqIframe) {
            faqIframe.src = '';
        }
    } else {
        if (menuGrid) menuGrid.style.display = 'grid';
    }

    if (typeof updateLanguageTranslations === 'function') {
        updateLanguageTranslations();
    }
}

// --- BANCO DE ENLACES Y SELECTOR DE IDIOMAS PARA EL VIDEO EMBEBIDO DE FAQ ---
document.addEventListener("DOMContentLoaded", function() {
    const videoLinks = {
        'en': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'es': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'pt': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'fr': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'de': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'it': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'ja': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'zh': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'ko': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'ar': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'tr': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s',
        'ru': 'https://www.youtube.com/watch?v=FWzv4t-TkB8&t=5s'
    };

    const faqSelector = document.getElementById('faq-video-lang-selector');
    const faqIframe = document.getElementById('faq-embedded-iframe');

    function getYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    if (faqSelector && faqIframe) {
        faqSelector.addEventListener('change', function(e) {
            const lang = e.target.value;
            const targetUrl = videoLinks[lang];
            if (targetUrl) {
                const vidId = getYouTubeId(targetUrl);
                if (vidId) {
                    faqIframe.src = `https://www.youtube.com/embed/${vidId}?autoplay=1`;
                    console.log(`Video incrustado cambiado a idioma: ${lang}`);
                }
            }
        });
    }
});

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
// --- CONTROLADOR DEL FORMULARIO DE SOPORTE PERSONAL ---
async function submitSupportForm() {
    const emailInput = document.getElementById('support-user-email');
    const msgInput = document.getElementById('support-user-msg');
    const successAlert = document.getElementById('support-success-alert');

    if (!emailInput || !msgInput) return;

    if (msgInput.value.trim() === '') {
        alert('Por favor escribe un mensaje antes de enviar.');
        return;
    }

    const formData = {
        apikey: "a56ac434-2039-4a81-a413-01f92ff5d54b",
        subject: `Nuevo mensaje de soporte BENEATH de: ${emailInput.value.trim() || 'Anónimo'}`,
        email: emailInput.value.trim(),
        message: msgInput.value.trim()
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.success) {
            if (successAlert) {
                successAlert.style.display = 'block';
                setTimeout(() => {
                    successAlert.style.display = 'none';
                }, 5000);
            }
            emailInput.value = '';
            msgInput.value = '';
            console.log("Mensaje enviado de forma real al correo electrónico.");
        } else {
            alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
    } catch (error) {
        console.error("Error de red:", error);
        alert("Error de conexión con el servidor de mensajería.");
    }
}
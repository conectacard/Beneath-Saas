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

    function syncPresentationVideo(lang) {
        const targetLang = videoLinks[lang] ? lang : 'en';
        const targetUrl = videoLinks[targetLang] || videoLinks['en'];

        if (videoLinkTag && targetUrl) {
            videoLinkTag.href = targetUrl;
        }

        if (videoSelector) {
            const optionExists = Array.from(videoSelector.options).some(opt => opt.value === targetLang);
            videoSelector.value = optionExists ? targetLang : 'en';
        }

        if (videoHeaderBadge) {
            const langLabel = videoSelector && videoSelector.selectedIndex >= 0
                ? videoSelector.options[videoSelector.selectedIndex].text.split(' ')[0].toUpperCase()
                : targetLang.toUpperCase();
            videoHeaderBadge.innerText = `COMPANY OVERVIEW - ${langLabel} VIDEO`;
        }
    }

    if (videoSelector && videoLinkTag) {
        videoSelector.addEventListener('change', function(e) {
            syncPresentationVideo(e.target.value);
            console.log(`Cambiando video institucional a idioma: ${e.target.value}`);
        });
    }

    document.addEventListener('beneath:langChange', function(e) {
        if (e.detail && e.detail.lang) {
            syncPresentationVideo(e.detail.lang);
        }
    });

    const savedPresentationLang = localStorage.getItem('sipv_lang') || 'en';
    syncPresentationVideo(savedPresentationLang);
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
    const pricingView = document.getElementById('pricing-view');

    // Oculta todos los paneles por defecto
    if (menuGrid) menuGrid.style.display = 'none';
    if (aboutView) aboutView.style.display = 'none';
    if (complianceView) complianceView.style.display = 'none';
    if (faqView) faqView.style.display = 'none';
    if (supportView) supportView.style.display = 'none';
    if (pricingView) pricingView.style.display = 'none';

    if (section === 'privacy') {
        if (aboutView) aboutView.style.display = 'block';
    } else if (section === 'compliance') {
        if (complianceView) complianceView.style.display = 'block';
    } else if (section === 'faq') {
        if (faqView) faqView.style.display = 'block';
    } else if (section === 'support') {
        if (supportView) supportView.style.display = 'block';
    } else if (section === 'pricing') {
        if (pricingView) pricingView.style.display = 'block';
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
        'en': 'https://www.youtube.com/watch?v=_bScHMX92xk',
        'es': 'https://www.youtube.com/watch?v=80KK8u-0_qU',
        'pt': 'https://www.youtube.com/watch?v=qOxsepzv2K0',
        'fr': 'https://www.youtube.com/watch?v=nLOMWH2BOXo',
        'de': 'https://www.youtube.com/watch?v=FlLDXNPgmbM',
        'it': 'https://www.youtube.com/watch?v=PmirXtg8ZtI',
        'ja': 'https://www.youtube.com/watch?v=TcXcDa_veds',
        'zh': 'https://www.youtube.com/watch?v=b6P4sujtrSg',
        'ko': 'https://www.youtube.com/watch?v=b2nd6HQvAbs',
        'ar': 'https://www.youtube.com/watch?v=f_8gXBaBxpU',
        'tr': 'https://www.youtube.com/watch?v=UVO4abyO_z0',
        'ru': 'https://www.youtube.com/watch?v=DIKpncNKQzE',
        'sv': 'https://www.youtube.com/watch?v=-qWlmm5a6yw',
        'nl': 'https://www.youtube.com/watch?v=mnv-ebrYpwE'
    };

    const faqSelector = document.getElementById('faq-video-lang-selector');
    const faqIframe = document.getElementById('faq-embedded-iframe');

    function getYouTubeId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    function syncFaqVideo(lang, autoplay) {
        const targetLang = videoLinks[lang] ? lang : 'en';
        const targetUrl = videoLinks[targetLang] || videoLinks['en'];

        if (faqSelector) {
            const optionExists = Array.from(faqSelector.options).some(opt => opt.value === targetLang);
            if (optionExists) {
                faqSelector.value = targetLang;
            }
        }

        if (faqIframe && targetUrl) {
            const vidId = getYouTubeId(targetUrl);
            if (vidId) {
                faqIframe.src = autoplay
                    ? `https://www.youtube.com/embed/${vidId}?autoplay=1`
                    : `https://www.youtube.com/embed/${vidId}`;
            }
        }
    }

    if (faqSelector && faqIframe) {
        faqSelector.addEventListener('change', function(e) {
            syncFaqVideo(e.target.value, true);
            console.log(`Video incrustado cambiado a idioma: ${e.target.value}`);
        });
    }

    document.addEventListener('beneath:langChange', function(e) {
        if (e.detail && e.detail.lang) {
            syncFaqVideo(e.detail.lang, false);
        }
    });

    const savedFaqLang = localStorage.getItem('sipv_lang') || 'en';
    syncFaqVideo(savedFaqLang, false);
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
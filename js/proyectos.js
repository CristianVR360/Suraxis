/**
 * Script para cargar dinámicamente los datos del proyecto desde JSON
 */

// Función para obtener el ID del proyecto desde la URL
function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Función para mostrar error cuando el proyecto no se encuentra
function showProjectNotFound() {
    const mainContent = document.querySelector('body');
    if (mainContent) {
        mainContent.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; flex-direction: column; padding: 20px; text-align: center;">
                <h1 style="color: #fb5607; margin-bottom: 20px;">Proyecto no encontrado</h1>
                <p style="font-size: 18px; margin-bottom: 30px;">El proyecto solicitado no existe o no está disponible.</p>
                <a href="index.html" style="display: inline-block; padding: 12px 30px; background-color: #fb5607; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Volver al inicio
                </a>
            </div>
        `;
    }
}

// Función para cargar y renderizar el proyecto
async function loadProject() {
    const projectId = getProjectId();

    if (!projectId) {
        showProjectNotFound();
        return;
    }

    try {
        // Cargar el JSON del proyecto
        const response = await fetch(`data/proyectos/${projectId}.json`);

        if (!response.ok) {
            throw new Error('Proyecto no encontrado');
        }

        const data = await response.json();

        // Actualizar el título de la página
        document.title = `${data.name} | Suraxis | Proyectos`;

        // Renderizar el hero carousel
        renderHero(data);

        // Renderizar la sección About
        renderAbout(data);

        // Renderizar el mapa
        renderMap(data);

        // Renderizar el masterplan
        renderMasterplan(data);

        // Renderizar la galería
        renderGallery(data);

        // Renderizar las características
        renderFeatures(data);

        // Actualizar el botón de WhatsApp
        updateWhatsAppButton(data);

        // Renderizar las preguntas del formulario
        renderFormQuestions(data);

        // Actualizar el título de la galería
        const galleryTitle = document.querySelector('#gallery-title');
        if (galleryTitle) {
            galleryTitle.textContent = data.name;
        }

        // Reinicializar el carousel después de cargar el contenido
        initializeCarousel();

    } catch (error) {
        console.error('Error al cargar el proyecto:', error);
        showProjectNotFound();
    }
}

// Función para renderizar el hero carousel
function renderHero(data) {
    const carouselInner = document.querySelector('#hero-carousel');
    if (!carouselInner) return;

    // Determinar si usar logo o título
    const titleContent = data.logo
        ? `<img src="${data.logo}" alt="${data.name}" class="hero-logo">`
        : `<h1 class="display-1 text-white m-0" id="hero-title">${data.name}</h1>`;

    carouselInner.innerHTML = data.hero.map((src, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img class="w-100 hero-image" src="${src}" alt="${data.name} Hero ${i + 1}">
            <div class="hero-overlay"></div>
            <div class="hero-overlay-bottom"></div>
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 class="font-weight-medium m-0" style="color: #ffffff;" id="hero-location">${data.location}</h2>
                ${titleContent}
                <h2 class="text-white m-0" id="hero-tagline">${data.tagline}</h2>
            </div>
        </div>
    `).join('');
}

// Función para renderizar la sección About
function renderAbout(data) {
    // Subtítulo
    const aboutSubtitle = document.querySelector('#about-subtitle');
    if (aboutSubtitle) {
        aboutSubtitle.textContent = data.about.subtitle;
    }

    // Título del resumen
    const summaryTitle = document.querySelector('#summary-title');
    if (summaryTitle) {
        summaryTitle.textContent = data.about.summary_title;
    }

    // Resumen superior
    const summaryTop = document.querySelector('#about-summary-top');
    if (summaryTop) {
        summaryTop.textContent = data.about.summary_top;
    }

    // Texto del resumen
    const summaryText = document.querySelector('#about-summary-text');
    if (summaryText) {
        summaryText.textContent = data.about.summary_text;
    }

    // Título de atractivos
    const attractivesTitle = document.querySelector('#attractives-title');
    if (attractivesTitle) {
        attractivesTitle.textContent = data.about.attractives_title;
    }

    // Descripción de atractivos
    const attractivesDescription = document.querySelector('#attractives-description');
    if (attractivesDescription) {
        attractivesDescription.textContent = data.about.attractives_description;
    }

    // Lista de atractivos
    const attractivesList = document.querySelector('#attractives-list');
    if (attractivesList) {
        attractivesList.innerHTML = data.about.attractives_items.map(item => `
            <h5 class="mb-3"><i class="fa fa-check text-primary mr-3"></i>${item}</h5>
        `).join('');
    }
}

// Función para renderizar el mapa
function renderMap(data) {
    const mapFrame = document.querySelector('#map-frame');
    if (mapFrame) {
        mapFrame.src = data.about.map_iframe;
    }
}

// Función para renderizar el masterplan
function renderMasterplan(data) {
    const masterplanIframe = document.querySelector('#masterplan-iframe');
    const masterplanContainer = document.querySelector('.masterplan-container');
    if (!masterplanIframe || !masterplanContainer) {
        return;
    }

    const masterplanUrl = data.about.masterplan_url;
    const isImage = /\.(jpe?g|png|gif|webp)$/i.test(masterplanUrl);
    let masterplanImage = masterplanContainer.querySelector('.masterplan-image');

    if (isImage) {
        masterplanIframe.style.display = 'none';
        masterplanIframe.removeAttribute('src');

        if (!masterplanImage) {
            masterplanImage = document.createElement('img');
            masterplanImage.className = 'masterplan-image';
            masterplanContainer.insertBefore(masterplanImage, masterplanIframe);
        }

        masterplanImage.src = masterplanUrl;
        masterplanImage.alt = `${data.name} masterplan`;
        masterplanImage.style.display = 'block';
    } else {
        masterplanIframe.style.display = 'block';
        masterplanIframe.src = masterplanUrl;

        if (masterplanImage) {
            masterplanImage.remove();
        }
    }
}

// Función para renderizar la galería
function renderGallery(data) {
    const galleryGrid = document.querySelector('#gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = data.gallery.map((src, index) => `
        <div class="gallery-item" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
            <img src="${src}" alt="${data.name} ${index + 1}" class="gallery-image">
        </div>
    `).join('');

    // Re-inicializar AOS para las nuevas imágenes
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }

    // Re-inicializar los handlers del modal de galería
    initializeGalleryModal();
}

// Función para renderizar las características del proyecto
function renderFeatures(data) {
    const featuresContainer = document.querySelector('#features-container');
    const featuresSubtitle = document.querySelector('#features-subtitle');
    const featuresTitle = document.querySelector('#features-title');

    // Cargar títulos de la sección
    if (featuresSubtitle && data.features_section) {
        featuresSubtitle.textContent = data.features_section.subtitle || 'Características';
    }

    if (featuresTitle && data.features_section) {
        featuresTitle.textContent = data.features_section.title || 'de este proyecto';
    }

    if (!featuresContainer) return;

    // Si no hay características en el JSON, usar valores por defecto o dejar vacío
    if (!data.features || data.features.length === 0) {
        featuresContainer.innerHTML = '';
        return;
    }

    featuresContainer.innerHTML = data.features.map(feature => `
        <div class="col-lg-6 mb-5">
            <div class="row align-items-center">
                <div class="col-sm-5">
                    <img class="img-fluid mb-3 mb-sm-0" src="${feature.image}" alt="${feature.title}">
                </div>
                <div class="col-sm-7">
                    <h4><i class="${feature.icon} service-icon"></i>${feature.title}</h4>
                    <p class="m-0">${feature.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Función para actualizar el botón de WhatsApp según el proyecto
function updateWhatsAppButton(data) {
    const whatsappBtn = document.querySelector('#whatsappBtn');
    const whatsappText = document.querySelector('#whatsapp-text');

    if (!whatsappBtn) return;

    // Actualizar el texto del botón (por defecto usa el nombre del proyecto)
    const buttonText = data.whatsapp_button_text || `Consulta por ${data.name}`;
    if (whatsappText) {
        whatsappText.textContent = buttonText;
    }

    // Actualizar el mensaje de WhatsApp
    const defaultMessage = `Hola, me gustaría tener más información sobre ${data.name}`;
    const whatsappMessage = data.whatsapp_message || defaultMessage;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Actualizar el href del botón
    whatsappBtn.href = `https://api.whatsapp.com/send?phone=56935634527&text=${encodedMessage}`;
}

// Función para renderizar las preguntas del formulario dinámicamente
function renderFormQuestions(data) {
    const container = document.querySelector('#form-questions-container');
    if (!container) return;

    // Si no hay preguntas en el JSON, no mostrar nada
    if (!data.form_questions || data.form_questions.length === 0) {
        container.innerHTML = '';
        return;
    }

    container.innerHTML = data.form_questions.map(question => {
        const gridCols = question.options.length === 2 ? '1fr 1fr' : '1fr';

        const optionsHTML = question.options.map(option => `
            <label style="position: relative; cursor: pointer;">
                <input type="radio" name="${question.name}" value="${option.value}" ${question.required ? 'required' : ''} style="position: absolute; opacity: 0; width: 0; height: 0;">
                <div class="radio-card" style="
                    padding: 16px 20px;
                    border: 2px solid #e0e0e0;
                    border-radius: 12px;
                    text-align: center;
                    transition: all 0.3s ease;
                    background: #fff;
                    color: #2c3e50;
                    font-weight: 500;
                    font-size: 15px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                ">
                    ${option.icon || ''} ${option.label}
                </div>
            </label>
        `).join('');

        return `
            <div class="form-group" style="margin-bottom: ${question.margin_bottom || '25px'};">
                <label style="color: #2c3e50; font-weight: 600; margin-bottom: 15px; display: block; font-size: 15px; text-transform: uppercase; letter-spacing: 0.5px;">
                    ${question.label}
                </label>
                <div style="display: grid; grid-template-columns: ${gridCols}; gap: 12px;">
                    ${optionsHTML}
                </div>
            </div>
        `;
    }).join('');
}

// Variable global para el índice de la galería
let currentGalleryIndex = 0;

// Función para inicializar el modal de galería
function initializeGalleryModal() {
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalImg = document.getElementById('galleryModalImage');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    if (!galleryModal || !galleryModalImg) return;

    // Función para mostrar imagen por índice
    function showGalleryImage(index) {
        if (galleryItems.length === 0) return;

        // Manejo circular
        if (index < 0) index = galleryItems.length - 1;
        if (index >= galleryItems.length) index = 0;

        currentGalleryIndex = index;
        const item = galleryItems[currentGalleryIndex];
        const img = item.querySelector('img');

        if (img) {
            galleryModalImg.src = img.src;
            galleryModalImg.alt = img.alt;
        }
    }

    // Agregar listeners a cada item de la galería
    galleryItems.forEach((item, index) => {
        item.onclick = function () {
            galleryModal.style.display = "block";
            showGalleryImage(index);
            document.body.style.overflow = 'hidden';
        };
    });

    // Listeners para botones de navegación
    if (prevBtn) {
        prevBtn.onclick = function (e) {
            e.stopPropagation();
            showGalleryImage(currentGalleryIndex - 1);
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function (e) {
            e.stopPropagation();
            showGalleryImage(currentGalleryIndex + 1);
        };
    }

    // Navegación con teclado
    if (!galleryModal.hasAttribute('data-keyboard-init')) {
        galleryModal.setAttribute('data-keyboard-init', 'true');
        document.addEventListener('keydown', function (e) {
            if (galleryModal.style.display === "block") {
                if (e.key === "ArrowLeft") {
                    showGalleryImage(currentGalleryIndex - 1);
                } else if (e.key === "ArrowRight") {
                    showGalleryImage(currentGalleryIndex + 1);
                }
            }
        });
    }

    // Cerrar modal de galería (solo si no está ya configurado)
    const closeBtn = document.querySelector('.gallery-close-modal');
    if (closeBtn && !closeBtn.hasAttribute('data-initialized')) {
        closeBtn.setAttribute('data-initialized', 'true');
        closeBtn.onclick = function () {
            galleryModal.style.display = "none";
            document.body.style.overflow = '';
        };
    }

    // Cerrar modal al hacer click fuera de la imagen (solo si no está ya configurado)
    if (!galleryModal.hasAttribute('data-initialized')) {
        galleryModal.setAttribute('data-initialized', 'true');
        galleryModal.onclick = function (event) {
            if (event.target === galleryModal) {
                galleryModal.style.display = "none";
                document.body.style.overflow = '';
            }
        };
    }
}

// Función para inicializar el carousel
function initializeCarousel() {
    const heroCarousel = document.getElementById('blog-carousel');
    if (!heroCarousel) return;

    // Inicializar carousel de Bootstrap
    if (typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
        const carousel = new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            wrap: true,
            pause: 'hover',
            keyboard: true,
            touch: true
        });

        // Función para aplicar zoom a la imagen activa
        function applyZoomToActiveImage() {
            const activeImage = heroCarousel.querySelector('.carousel-item.active .hero-image');
            if (activeImage) {
                activeImage.style.transform = 'scale(1.1)';
            }
        }

        // Aplicar zoom inicial
        setTimeout(() => {
            applyZoomToActiveImage();
        }, 500);

        // Eventos del carousel
        heroCarousel.addEventListener('slide.bs.carousel', function (event) {
            const allImages = heroCarousel.querySelectorAll('.hero-image');
            allImages.forEach(img => {
                img.style.transform = 'scale(1)';
            });
        });

        heroCarousel.addEventListener('slid.bs.carousel', function (event) {
            setTimeout(() => {
                applyZoomToActiveImage();
            }, 200);
        });

        // Asegurar que el carousel continúe automáticamente
        heroCarousel.addEventListener('mouseleave', function () {
            carousel.cycle();
        });

        // Iniciar el ciclo automático
        carousel.cycle();
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    loadProject();
});


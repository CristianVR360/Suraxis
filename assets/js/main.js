(function($){
	"use strict";

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 35){  
			$('.navbar-area').addClass("sticky");
		}
		else{
			$('.navbar-area').removeClass("sticky");
		}
	});

	 // Banner slides
	 $('.slider-courser').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		margin: 0,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout:3000,
		smartSpeed:1000,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	 // Courses slides
	 $('.courses-courser').owlCarousel({
		nav: false,
		loop: true,
		dots: true,
		margin: 0,
		autoplay: false,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

	 // Campus slides
	 $('.campus-slider').owlCarousel({
		nav: false,
		loop: true,
		dots: false,
		center: true,
		margin: 20,
		autoHeight:true,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed:1000,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 2
			},
			1200: {
				items: 2

			}
		}
	});

	// Event Slides
	$('.slider-event').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		items: 3,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3

			}
		}
	});

	// About Content Slides
	$('.about-content-courser').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		dotsData: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		items: 3,
		navText: [
			"<i class='bx bx-arrow-back bx-rotate-180'></i>",
			"<i class='bx bx-arrow-back bx-rotate-0'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 1

			}
		}
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	
	// Testimonial Slides
	$('.lgun-testimonial-navigator').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
	});

	// Animation 
	AOS.init({
		once: true,
		duration: 2000,
	});

	// Faq section 
	const faqItems = document.querySelectorAll('.faq-item');

	faqItems.forEach(item => {
	  const question = item.querySelector('.faq-question');
	  const answer = item.nextElementSibling;
	  const icon = item.querySelector('i');
	
	  item.addEventListener('click', () => {
		faqItems.forEach(otherItem => {
		  if (otherItem !== item) {
			const otherAnswer = otherItem.nextElementSibling;
			const otherIcon = otherItem.querySelector('i');
	
			otherAnswer.classList.remove('active');
			otherIcon.classList.remove('active');
			otherAnswer.style.maxHeight = "0";
		  }
		});
	
		answer.classList.toggle('active');
		icon.classList.toggle('active');
		if (answer.classList.contains('active')) {
		  answer.style.maxHeight = answer.scrollHeight + "px";
		} else {
		  answer.style.maxHeight = "0";
		}
	  });
	});

	// Preloader
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow'); // fade out the preloader background
		$('body').delay(350).css({ 'overflow': 'visible' }); // show the body content
	});

	// Go to Top
	$(function(){
		
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  

		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

}(jQuery));

function grax_tm_contact_form(){
	
	"use strict";
	
	document.getElementById('contact_form').addEventListener('submit', function(e) {
		e.preventDefault();
		
		// Obtener los valores del formulario
		const name = document.getElementById('searchKey1').value;
		const phone = document.getElementById('searchKey2').value;
		const email = document.getElementById('searchKey3').value;
		
		// Validar campos
		if (!name || !phone || !email) {
			alert('Por favor complete todos los campos requeridos');
			return;
		}
		
		// Mostrar carga
		const submitBtn = document.getElementById('send_message');
		const originalBtnText = submitBtn.textContent;
		submitBtn.textContent = 'Enviando...';
		submitBtn.disabled = true;

		// Simular envío exitoso (ya que no hay backend configurado)
		setTimeout(() => {
					alert('Tu mensaje ha sido enviado. Te contactaremos pronto.');
					document.getElementById('contact_form').reset();
			submitBtn.textContent = originalBtnText;
			submitBtn.disabled = false;
		}, 1000);
	});
	
}
// Función global para cerrar el modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Función global para abrir el modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Hacer las funciones globales
window.openModal = openModal;
window.closeModal = closeModal;

// JavaScript para el modal
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar formulario de contacto
    grax_tm_contact_form();
    
    // Modal para imágenes
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImage');
    const triggers = document.querySelectorAll('.image-modal-trigger');
    
    triggers.forEach(trigger => {
        trigger.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.querySelector('img').src;
            modalImg.alt = this.querySelector('img').alt;
            
            // Prevenir scroll del body en móviles cuando el modal está abierto
            if (window.innerWidth <= 768) {
                document.body.style.overflow = 'hidden';
            }
        }
    });
    
    document.querySelector('.close-modal').onclick = function() {
        modal.style.display = "none";
        // Restaurar scroll del body
        document.body.style.overflow = '';
    }
    
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            // Restaurar scroll del body
            document.body.style.overflow = '';
        }
    }
    
    // Mejorar la experiencia táctil para la imagen del modelo de negocio
    const managementImage = document.querySelector('.responsive-management-image');
    if (managementImage) {
        // Agregar indicador visual de que es clickeable en móviles
        if (window.innerWidth <= 768) {
            managementImage.style.cursor = 'pointer';
            
            // Agregar efecto de presión táctil
            managementImage.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            managementImage.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
            
            managementImage.addEventListener('touchcancel', function() {
                this.style.transform = 'scale(1)';
            });
        }
        
        // Mejorar la accesibilidad
        managementImage.setAttribute('tabindex', '0');
        managementImage.setAttribute('role', 'button');
        managementImage.setAttribute('aria-label', 'Ampliar imagen del modelo de negocio');
        
        // Permitir abrir con tecla Enter
        managementImage.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                
                if (window.innerWidth <= 768) {
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    }
    
    // Funciones para el modal del modelo de negocio
    function openBusinessModelModal() {
        const modal = document.getElementById('businessModelModal');
        if (modal) {
            modal.style.display = "block";
            // Enfocar el modal para accesibilidad
            modal.focus();
        }
    }
    
    function closeBusinessModelModal() {
        const modal = document.getElementById('businessModelModal');
        if (modal) {
            modal.style.display = "none";
        }
    }
    
    // Hacer las funciones globales
    window.openBusinessModelModal = openBusinessModelModal;
    window.closeBusinessModelModal = closeBusinessModelModal;
    
    // Event listeners para el modal del modelo de negocio
    const businessModelModal = document.getElementById('businessModelModal');
    if (businessModelModal) {
        // Cerrar al hacer clic fuera del modal
        businessModelModal.onclick = function(event) {
            if (event.target === businessModelModal) {
                closeBusinessModelModal();
            }
        }
        
        // Cerrar con tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && businessModelModal.style.display === 'block') {
                closeBusinessModelModal();
            }
        });
        
        // Prevenir que el modal se cierre al hacer clic en la imagen
        const modalImage = document.getElementById('businessModelImage');
        if (modalImage) {
            modalImage.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        }
        
        // Mejorar la experiencia táctil en móviles
        if (window.innerWidth <= 768) {
            let startY = 0;
            let currentY = 0;
            
            businessModelModal.addEventListener('touchstart', function(e) {
                startY = e.touches[0].clientY;
            });
            
            businessModelModal.addEventListener('touchmove', function(e) {
                currentY = e.touches[0].clientY;
                const diff = startY - currentY;
                
                // Si el swipe es hacia arriba y es significativo, cerrar el modal
                if (diff > 100) {
                    closeBusinessModelModal();
                }
            });
        }
    }
    
    // Mejorar la experiencia táctil para la imagen del modelo de negocio
    const businessModelImage = document.querySelector('.business-model-image');
    if (businessModelImage) {
        // Agregar indicador visual de que es clickeable en móviles
        if (window.innerWidth <= 768) {
            businessModelImage.style.cursor = 'pointer';
            
            // Agregar efecto de presión táctil
            businessModelImage.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            businessModelImage.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
            
            businessModelImage.addEventListener('touchcancel', function() {
                this.style.transform = 'scale(1)';
            });
        }
        
        // Mejorar la accesibilidad
        businessModelImage.setAttribute('tabindex', '0');
        businessModelImage.setAttribute('role', 'button');
        businessModelImage.setAttribute('aria-label', 'Ampliar imagen del modelo de negocio');
        
        // Permitir abrir con tecla Enter
        businessModelImage.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openBusinessModelModal();
            }
        });
    }
    
    // Manejo para los modales personalizados
    const modals = document.querySelectorAll('.custom-modal');
    
    // Permitir cerrar con ESC para cualquier modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'flex') {
                    closeModal(modal.id);
                }
            });
        }
    });
    
    // Permitir cerrar haciendo clic en el backdrop para cualquier modal
    modals.forEach(modal => {
        const backdrop = modal.querySelector('.custom-modal-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', function() {
                closeModal(modal.id);
            });
        }
    });
    
    // Mejoras para dispositivos móviles
    function isMobile() {
        return window.innerWidth <= 768;
    }
    

    

    
    // Mejorar la experiencia táctil en móviles
    if (isMobile()) {
        // Agregar soporte para gestos de swipe para cerrar modales
        modals.forEach(modal => {
            let startY = 0;
            let currentY = 0;
            
            modal.addEventListener('touchstart', function(e) {
                startY = e.touches[0].clientY;
            });
            
            modal.addEventListener('touchmove', function(e) {
                currentY = e.touches[0].clientY;
                const diff = startY - currentY;
                
                // Si el swipe es hacia arriba y es significativo, cerrar el modal
                if (diff > 100) {
                    closeModal(modal.id);
                }
            });
        });
        
        // Mejorar el botón de WhatsApp para móviles
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            whatsappBtn.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        }
    }
    
    // Optimizar para pantallas muy pequeñas
    function handleResize() {
        const isVerySmall = window.innerWidth <= 480;
        
        if (isVerySmall) {
            // Ajustar tamaños de fuente y espaciado para pantallas muy pequeñas
            document.documentElement.style.fontSize = '14px';
        } else {
            document.documentElement.style.fontSize = '';
        }
    }
    
    // Ejecutar al cargar y cuando cambie el tamaño de la ventana
    handleResize();
    window.addEventListener('resize', handleResize);
});

// Variables para la navegación de proyectos
let currentSlide = 0;
let totalSlides = 3; // Desktop: 3 slides

// Función para detectar si es móvil
function isMobileView() {
    return window.innerWidth <= 768;
}

// Función para actualizar el número total de slides según el dispositivo
function updateTotalSlides() {
    if (isMobileView()) {
        totalSlides = 5; // Móvil: 5 slides individuales
    } else {
        totalSlides = 3; // Desktop: 3 slides con dos cards
    }
}

// Función para navegar entre proyectos
function navigateProjects(direction) {
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    
    const projectsRow = document.getElementById('projectsRow');
    if (projectsRow) {
        projectsRow.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Actualizar estado de las flechas
    updateArrowStates();
}

// Función para actualizar el estado de las flechas
function updateArrowStates() {
    const leftArrows = document.querySelectorAll('.nav-arrow-left');
    const rightArrows = document.querySelectorAll('.nav-arrow-right');
    
    leftArrows.forEach(arrow => {
        arrow.style.opacity = currentSlide === 0 ? '0.5' : '1';
        arrow.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    });
    
    rightArrows.forEach(arrow => {
        arrow.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
        arrow.style.pointerEvents = currentSlide === totalSlides - 1 ? 'none' : 'auto';
    });
}

// Inicializar navegación de proyectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar configuración según dispositivo
    updateTotalSlides();
    updateArrowStates();
    
    // Agregar navegación con teclado
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            navigateProjects('prev');
        } else if (event.key === 'ArrowRight') {
            navigateProjects('next');
        }
    });
    
    // Actualizar navegación cuando cambie el tamaño de la ventana
    window.addEventListener('resize', function() {
        updateTotalSlides();
        updateArrowStates();
    });
});
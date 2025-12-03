//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
				'onLeave': function(origin, destination, direction) {
					// Animación adicional al cambiar de sección
					$('.section').eq(destination-1).find('.wow').addClass('animated');
				}
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator({
        animation: "flip",
        speed: 1000
    });
})

// Configuración de Particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ff416c"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff4b2b",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});

// Añadir efecto de parallax suave al hacer scroll
$(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();
    
    // Parallax para el fondo de la sección home
    $('#home').css({
        'background-position': '50% ' + (scrollPosition * 0.2) + 'px'
    });
    
    // Animación para las habilidades cuando llegue a la sección
    if (scrollPosition > $('#about').offset().top - 500) {
        $('.progress-bar').addClass('animated fadeInLeft');
    }
});

// Efecto hover para las tarjetas
$('.card-hover').hover(
    function() {
        $(this).find('.fa').addClass('animated pulse');
    },
    function() {
        $(this).find('.fa').removeClass('animated pulse');
    }
);

// Añadir animación a los elementos del portfolio
$('.portfolio-thumb').hover(
    function() {
        $(this).find('h4, h5').addClass('animated fadeInUp');
    },
    function() {
        $(this).find('h4, h5').removeClass('animated fadeInUp');
    }
);
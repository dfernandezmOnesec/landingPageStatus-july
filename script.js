// Funcionalidades adicionales para la landing page de AITU

// Efectos de scroll reveal
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observar elementos con clase scroll-reveal
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Crear partículas de fondo
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 10 + 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Animación de números con contador
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        const displayValue = Math.floor(current);
        element.textContent = displayValue.toLocaleString();
    }, 16);
}

// Crear indicadores de progreso circulares
function createCircularProgress(containerId, percentage) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const svg = `
        <svg>
            <circle class="bg" cx="60" cy="60" r="${radius}"></circle>
            <circle class="progress" cx="60" cy="60" r="${radius}" 
                    style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference}"></circle>
        </svg>
        <div class="percentage">${percentage}%</div>
    `;

    container.innerHTML = svg;

    // Animar el progreso
    setTimeout(() => {
        const progressCircle = container.querySelector('.progress');
        progressCircle.style.strokeDashoffset = offset;
    }, 500);
}

// Timeline de logros
function createTimeline() {
    const timelineData = [
        {
            date: '30-Jun',
            title: 'Inicio del Assessment',
            description: 'Lanzamiento del proceso de evaluación interna de iniciativas de IA'
        },
        {
            date: '17-Jul',
            title: 'Logro Significativo',
            description: '+45% incremento en la ejecución de checklists operativos'
        },
        {
            date: 'Actual',
            title: 'Consolidación',
            description: 'Backlog estructurado con más de 220 checklists gestionados'
        }
    ];

    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline';
    timelineContainer.innerHTML = timelineData.map((item, index) => `
        <div class="timeline-item">
            <div class="timeline-content">
                <h4>${item.date}</h4>
                <h5>${item.title}</h5>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');

    return timelineContainer;
}

// Función para crear tooltips
function createTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        element.classList.add('tooltip');
        element.innerHTML += `<span class="tooltiptext">${tooltipText}</span>`;
    });
}

// Función para agregar navegación suave
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para crear gráficos adicionales
function createAdditionalCharts() {
    // Gráfico de dona para distribución de iniciativas
    const donutData = {
        labels: ['Alta Prioridad', 'Media Prioridad', 'Baja Prioridad', 'No Viable'],
        datasets: [{
            data: [30, 25, 25, 20],
            backgroundColor: ['#2E7D32', '#FF8F00', '#1565C0', '#C62828'],
            borderWidth: 0
        }]
    };

    const donutCtx = document.getElementById('donut-chart');
    if (donutCtx) {
        new Chart(donutCtx, {
            type: 'doughnut',
            data: donutData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

// Función para agregar efectos de parallax
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Función para agregar modo oscuro
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        });
    }

    // Cargar preferencia guardada
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Función para agregar filtros a los gráficos
function initChartFilters() {
    const filterButtons = document.querySelectorAll('.chart-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Remover clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase activa al botón clickeado
            button.classList.add('active');
            
            // Aplicar filtro (aquí puedes implementar la lógica específica)
            applyChartFilter(filter);
        });
    });
}

function applyChartFilter(filter) {
    // Implementar lógica de filtrado específica según el filtro
    console.log('Aplicando filtro:', filter);
}

// Función para exportar datos
function exportData(format = 'pdf') {
    // Implementar lógica de exportación
    console.log('Exportando datos en formato:', format);
}

// Función para agregar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Función para agregar búsqueda
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.searchable');
            
            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }
}

// Función principal de inicialización
function init() {
    // Inicializar todas las funcionalidades
    initScrollReveal();
    createParticles();
    createTooltips();
    initSmoothScrolling();
    initParallax();
    initDarkMode();
    initChartFilters();
    initSearch();
    
    // Crear timeline si existe el contenedor
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineContainer.appendChild(createTimeline());
    }
    
    // Crear gráficos adicionales
    createAdditionalCharts();
    
    // Agregar event listeners para botones
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('export-btn')) {
            const format = e.target.dataset.format || 'pdf';
            exportData(format);
        }
    });
    
    // Cargar indicadores desde data.json y actualizar la UI
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const indicadores = [
          { valor: data.incremento_neto, label: "Incremento Neto en Ejecución", ayuda: "Diferencia de checklists completados entre dos periodos." },
          { valor: data.checklists_gestionados, label: "Checklists Gestionados", ayuda: "Total de checklists registrados en el periodo." },
          { valor: data.avance_general, label: "Avance General", ayuda: "Porcentaje de avance global: completados/gestionados." },
          { valor: data.checklists_completados, label: "Checklists Completados", ayuda: "Total de checklists marcados como completados." }
        ];
        document.querySelectorAll('.stat-card').forEach((card, i) => {
          card.querySelector('.stat-number').textContent = indicadores[i].valor;
          card.querySelector('.stat-label').textContent = indicadores[i].label;
          // Agrega explicación debajo del número
          let ayuda = card.querySelector('.stat-help');
          if (!ayuda) {
            ayuda = document.createElement('div');
            ayuda.className = 'stat-help';
            ayuda.style.fontSize = '0.85rem';
            ayuda.style.color = '#b2dfdb';
            ayuda.style.marginTop = '4px';
            ayuda.style.fontWeight = '400';
            card.querySelector('.stat-number').after(ayuda);
          }
          ayuda.textContent = indicadores[i].ayuda;
        });
      })
      .catch(err => {
        console.error("No se pudo cargar data.json:", err);
      });
    
    console.log('AITU Landing Page inicializada correctamente');
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// Ejecutar cuando la ventana se cargue completamente
window.addEventListener('load', () => {
    // Animación de números después de que todo esté cargado
    const numberElements = document.querySelectorAll('.animate-number');
    numberElements.forEach(element => {
        const target = parseInt(element.dataset.target);
        animateCounter(element, target);
    });
}); 
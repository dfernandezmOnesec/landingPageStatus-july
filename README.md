# AITU Achievements Landing Page

## Descripción

Esta es una landing page moderna y interactiva que presenta los logros y avances de la **AI Transformation Unit (AITU)** de ONESEC. La página está diseñada con la paleta de colores corporativa de ONESEC y presenta datos visuales interactivos extraídos del análisis de datos del notebook.

## Características Principales

### 🎨 Diseño y Branding
- **Paleta de colores ONESEC**: Utiliza los tonos verdes corporativos (#1a4d2e, #2d7d32, #4caf50, #66bb6a)
- **Logo y slogan**: "ONESEC - ALWAYS SECURE, NEVER AT RISK"
- **Diseño moderno**: Glassmorphism, efectos de blur y animaciones suaves
- **Responsive**: Optimizado para dispositivos móviles y desktop

### 📊 Visualización de Datos
- **Matriz de Priorización**: Gráfico interactivo de dispersión con cuadrantes
- **Evolución del Avance**: Gráfico combinado de barras y líneas
- **Avance por Depósito**: Gráfico de barras agrupadas
- **Indicadores de Progreso**: Barras de progreso animadas

### 🚀 Funcionalidades Interactivas
- **Animaciones de números**: Contadores animados para estadísticas
- **Efectos de scroll**: Elementos que aparecen al hacer scroll
- **Partículas de fondo**: Efectos visuales dinámicos
- **Tooltips informativos**: Información adicional al hacer hover
- **Navegación suave**: Scroll suave entre secciones

## Archivos Incluidos

```
├── index.html          # Página principal
├── styles.css          # Estilos adicionales y animaciones
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este archivo
```

## Datos Presentados

### Estadísticas Principales
- **+45%**: Incremento neto en ejecución de checklists
- **220+**: Checklists gestionados
- **60.19%**: Avance general
- **218**: Checklists completados

### Gráficos Incluidos
1. **Matriz de Priorización**: Muestra iniciativas clasificadas por beneficio vs costo
2. **Evolución del Avance**: Comparación 30-Jun vs 17-Jul
3. **Avance por Depósito**: Progreso en Conceptualización, Evaluación Final, etc.

## Cómo Usar

### Instalación Local
1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en tu navegador web
3. ¡Listo! La página se cargará automáticamente

### Personalización
Para personalizar los datos y gráficos:

1. **Modificar estadísticas**: Edita los valores en `index.html` en la sección `.stats-grid`
2. **Actualizar gráficos**: Modifica los datos en las variables JavaScript dentro de `index.html`
3. **Cambiar colores**: Ajusta la paleta en `styles.css`

### Agregar Nuevos Gráficos
Para agregar nuevos gráficos interactivos:

1. Crea un contenedor en `index.html`:
```html
<div class="chart-container" id="nuevo-grafico"></div>
```

2. Agrega el código JavaScript correspondiente usando Plotly.js

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con animaciones
- **JavaScript**: Interactividad y funcionalidades
- **Plotly.js**: Gráficos interactivos
- **Chart.js**: Gráficos adicionales

## Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles

## Estructura de Datos

Los datos provienen del análisis realizado en el notebook `Analysis_1p.ipynb` y incluyen:

- **Tabla_Clasificada_por_Cuadrante.csv**: Datos de priorización de iniciativas
- **Assesment.v1.xlsx**: Datos del 30 de Junio
- **Assesment-v.2.xlsx**: Datos del 17 de Julio

## Personalización Avanzada

### Agregar Nuevas Secciones
```html
<div class="section scroll-reveal">
    <h2 class="section-title">Nueva Sección</h2>
    <div class="chart-container" id="nuevo-chart"></div>
</div>
```

### Modificar Animaciones
Edita las animaciones en `styles.css`:
```css
@keyframes nuevaAnimacion {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}
```

### Agregar Funcionalidades JavaScript
Extiende `script.js` con nuevas funciones:
```javascript
function nuevaFuncionalidad() {
    // Tu código aquí
}
```

## Soporte

Para soporte técnico o preguntas sobre la implementación, contacta al equipo de AITU.

## Licencia

Este proyecto es propiedad de ONESEC y está destinado para uso interno de la organización.

---

**ONESEC AI Transformation Unit**  
*Motor de innovación y automatización* 
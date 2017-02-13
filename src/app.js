console.warn = () => {}

/* here you require original components. */
require('./red-shader.js')
require('./gradation-shader.js')

document.addEventListener('DOMContentLoaded', function () {
    if (typeof AFRAME === 'undefined') {
        throw new Error('Application started before AFRAME was available.')
    }
})


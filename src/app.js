/* here you require original components. */
require('./component.js')

document.addEventListener('DOMContentLoaded', function () {
    if (typeof AFRAME === 'undefined') {
        throw new Error('Application started before AFRAME was available.')
    }

    /* here you write main logic. */
    // ES6 notation
    ['hello', 'world', '!'].map((v) => console.log(v))
})

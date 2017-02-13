if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

/* here you write your components. */
AFRAME.registerShader('gradation-shader', {
    schema: {},

    vertexShader: require('./shader/default.vert')(),

    fragmentShader: require('./shader/gradation.frag')()

})


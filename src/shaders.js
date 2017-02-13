if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerShader('red-shader', {
    vertexShader: [
        'varying vec2 vUV;',
        'void main(void) {',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '}'
    ].join('\n'),

    fragmentShader: [
        'void main(void) {',
        '    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); //(Red, Green, Blue, Alpha)',
        '}'
    ].join('\n')
})

AFRAME.registerShader('gradation-shader', {
    vertexShader: require('./shader/default.vert')(),
    fragmentShader: require('./shader/gradation.frag')()
})

AFRAME.registerShader('time-gradation-shader', {
    schema: {
        time: { type: 'float', default: 0.0, is: 'uniform' }
    },
    vertexShader: require('./shader/default.vert')(),
    fragmentShader: require('./shader/time-gradation.frag')()
})

AFRAME.registerShader('time-transform-shader', {
    schema: {
        time: { type: 'float', default: 0.0, is: 'uniform' }
    },
    vertexShader: require('./shader/time-transform.vert')(),
    fragmentShader: require('./shader/time-gradation.frag')()
})


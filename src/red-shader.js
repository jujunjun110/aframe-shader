if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.')
}

/* here you write your components. */
AFRAME.registerShader('red-shader', {
    schema: {},

    vertexShader: [
        'varying vec2 vUV;',
        'void main(void) {',
        '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
        '  vUV = uv;',
        '}'
    ].join('\n'),

    fragmentShader: [
        'void main(void) {',
        '    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); //(Red, Green, Blue, Alpha)',
        '}'
    ].join('\n')

})


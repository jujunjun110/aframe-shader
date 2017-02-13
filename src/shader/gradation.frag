varying vec2 vUV; // [0.0, 0.0] ~ [1.0, 1.0]

void main(void) {
	float x = vUV[0];
	float y = vUV[1];
    gl_FragColor = vec4(x, y, 0.5, 1.0); //(Red, Green, Blue, Alpha)
}

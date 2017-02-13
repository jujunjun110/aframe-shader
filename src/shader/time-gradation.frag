varying vec2 vUV; // [0.0, 0.0] ~ [1.0, 1.0]
uniform float time;

void main(void) {
	vec2 p = (vUV * 2.0) - vec2(1.0, 1.0); // [-1.0, 1.0] ~ [1.0, 1.0]
	float x = p[0];
	float y = p[1];
    gl_FragColor = vec4(abs(x), abs(y), sin(time) * 0.5 + 0.5, 0.9); //(Red, Green, Blue, Alpha)
}

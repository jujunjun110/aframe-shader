varying vec2 vUV;
uniform float time;

void main(void) {
	float Pi = 3.141592;
	float tx = position.x * abs(sin(position.y * Pi + time));
	float ty = position.y;
	float tz = position.z;
	vec3 transform = vec3(tx, ty, tz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transform, 1.0);
    vUV = uv;
}

varying vec2 vUV;
uniform float time;

void main(void) {
	// position: vec3([-0.5 ~ 0.5], [-0.5 ~ 0.5], [-0.5 ~ 0.5])
	float Pi = 3.141592;
	float tx = position.x * (abs(sin(position.y * Pi + time)) * 0.7 + 0.3);
	float ty = position.y;
	float tz = position.z * (abs(sin(position.y * Pi + time)) * 0.7 + 0.3);
	vec3 transform = vec3(tx, ty, tz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transform, 1.0);
    vUV = uv;
}

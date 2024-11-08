import * as THREE from "three";

const RadialGradientShader = {
  uniforms: {
    u_resolution: { value: new THREE.Vector2() },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    u_color: { value: new THREE.Color(0xffffff) },
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform vec3 u_color;

    void main() {
      vec2 st = gl_FragCoord.xy / u_resolution;
      float dist = distance(st, u_mouse);
      float intensity = smoothstep(0.01, 0.5, dist); // Adjust to control gradient size
      gl_FragColor = vec4(u_color * (1.0 - intensity), 1.0);
    }
  `,
};

export default RadialGradientShader;

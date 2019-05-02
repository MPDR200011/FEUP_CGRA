#ifdef GL_ES
precision highp float;
#endif

varying float vPosition;

void main() {

    vec4 color;
    if (vPosition > 0.5) {
        color = vec4(0.9,0.9,0,1);
    } else {
        color = vec4(0,0,0.9,1);
    }

    gl_FragColor = color;
}


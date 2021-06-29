//@flow
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-native'
import timeLoop from '../../utils/timeLoop'

const shaders = Shaders.create({
  sd: {
    // uniforms are variables from JS. We pipe blue uniform into blue output color
    frag: GLSL`#ifdef GL_ES
precision mediump float;
#endif

uniform float time;

void main() {
  gl_FragColor = vec4(0.0, 0.7, 0.3, 0.7);
}
`,
  },
})

// We can make a <HelloBlue blue={0.5} /> that will render the concrete <Node/>

const Example = timeLoop(({ time }) => (
  <Node shader={shaders.sd} uniforms={{ time: 0.001 * time }} />
))

// Our example will pass the slider value to HelloBlue
export default function Blue() {
  const { width, height } = useWindowDimensions()
  return (
    <Surface style={{ width, height: height - 140 }}>
      <Example />
    </Surface>
  )
}

//@flow
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-native'

const shaders = Shaders.create({
  helloBlue: {
    // uniforms are variables from JS. We pipe blue uniform into blue output color
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}
`,
  },
})

// We can make a <HelloBlue blue={0.5} /> that will render the concrete <Node/>
export function HelloBlue({ blue }) {
  return <Node shader={shaders.helloBlue} uniforms={{ blue }} />
}

// Our example will pass the slider value to HelloBlue
export default function Blue({ blue }) {
  const newBlue = blue || 0.4
  const { width, height } = useWindowDimensions()
  return (
    <Surface style={{ width, height: height - 140 }}>
      <HelloBlue blue={newBlue} />
    </Surface>
  )
}

//@flow
import React from 'react'
import { useWindowDimensions } from 'react-native'
import { Shaders, Node, GLSL } from 'gl-react'
import { Surface } from 'gl-react-native'

const shaders = Shaders.create({
  helloBlue: {
    // uniforms are variables from JS. We pipe blue uniform into blue output color
    vert: GLSL`
    void main(void) {
      gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
      gl_PointSize = 150.0;
    }
  `,
    frag: GLSL`
    void main(void) {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `,
  },
})

// We can make a <HelloBlue blue={0.5} /> that will render the concrete <Node/>
export function HelloBlue() {
  return <Node shader={shaders.helloBlue} />
}

// Our example will pass the slider value to HelloBlue
export default function Blue({ blue }) {
  const { width, height } = useWindowDimensions()
  console.log('ppp')
  return (
    <Surface
      style={{ width, height: height - 140 }}
      onLoad={gl => {
        console.log('Loading --', gl)
        console.log('gl', gl)
      }}>
      <HelloBlue />
    </Surface>
  )
}

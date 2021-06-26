import React from 'react'

import Page from '../../components/Page'
import Blue from './HelloBlue'
import Sdf from './Sdf'
import Tunnel from './Tunnel'
import Triangle from './Triangle'

const mapping = {
  Blue: Blue,
  Sdf: Sdf,
  Tunnel: Tunnel,
  Triangle: Triangle,
}

export default function GlScreen({
  route: {
    params: { gl },
  },
}) {
  const obj = mapping[gl]
  return <Page title="GLPages">{React.createElement(obj)}</Page>
}

import React from 'react'

import Page from '../../components/Page'
import Blue from './HelloBlue'
import BlueSwitch from './SwitchBlue'
import Sdf from './Sdf'
import Tunnel from './Tunnel'
import Triangle from './Triangle'
import C1 from './C1'
import C2 from './C2'
import C3 from './C3'
import Desert from './Desert'
import Play from './Play'
import ExRnView from './ExRnView1'

export const GLExamples = {
  Play,
  Blue,
  BlueSwitch,
  Sdf,
  Tunnel,
  Triangle,
  C1,
  C2,
  C3,
  Desert,
  ExRnView,
}

export default function GlScreen({
  route: {
    params: { gl },
  },
}) {
  const obj = GLExamples[gl]
  return <Page title="GLPages">{React.createElement(obj)}</Page>
}

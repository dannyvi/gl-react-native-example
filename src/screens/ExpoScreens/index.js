import React from 'react'

import Page from '../../components/Page'
import ExpoView from './ExpoView1'
import ExpoView2 from './ExpoView2'

export const ExpoExamples = {
  ExpoView,
  ExpoView2,
}

export default function ExpoScreen({
  route: {
    params: { gl },
  },
}) {
  const obj = ExpoExamples[gl]
  return <Page title="GLPages">{React.createElement(obj)}</Page>
}

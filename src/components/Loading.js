// @flow
import React from 'react'
import { Dimmer, Loader, Image } from 'semantic-ui-react'

const Loading = () => (
  <div className='loading'>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
    <Image src='/assets/images/wireframe/short-paragraph.png' />
  </div>
)

export default Loading

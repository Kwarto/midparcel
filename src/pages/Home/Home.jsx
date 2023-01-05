import React from 'react'
import Detail from '../../components/Detail/Detail'
import Hero from '../../components/Hero/Hero'
import History from '../../components/History/History'
import Know from '../../components/Know/Know'
import Track from '../../components/Track/Track'

const Home = () => {
  return (
      <>
          <Hero />
          <Detail />
          <Track />
          <History />
          <Know />
      </>
  )
}

export default Home
import React from 'react'
import Links from './Links'

const About = () => {
  return (
    <div className="bg-gray-100 h-[calc(100vh-4rem)]    ">
    <Links/>
    <main className="px-0 flex h-[calc(100vh-4rem)] items-center justify-center bg-dark-yellow">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">This page is coming soon...</h1>
      </div>
    </main>
  </div>
  )
}

export default About
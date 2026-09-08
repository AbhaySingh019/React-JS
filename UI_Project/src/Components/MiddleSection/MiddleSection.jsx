import React from 'react'
import MLeft from './MLeft'
import MRight from './MRight'

const MiddleSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 min-h-[calc(100vh-140px)] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <MLeft />
        <MRight />
      </div>
    </section>
  )
}

export default MiddleSection
import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const TopSection = () => {
  return (
    <div className=' bg-black flex justify-between'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default TopSection

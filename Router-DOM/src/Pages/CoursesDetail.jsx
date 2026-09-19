import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {

  const params=useParams()


  return (
    <div className='text-nowrap text-white'>
      <h1 className='text-blue-400'>{params.courseId} Details are here...</h1>
      
    </div>
  )
}

export default CoursesDetail

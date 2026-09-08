import React from 'react'

const MLeft = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5 max-w-lg mx-auto md:mx-0">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-black leading-tight">
        Welcome to DevHell UI
      </h1>

      <p className="text-base text-gray-600 dark:text-gray-600 leading-relaxed">
        Simple, clean, and flexible components made with Tailwind CSS and React.
      </p>

      <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-500 font-medium">
        Compatible With:{' '}
        <span className="font-bold text-gray-900 dark:text-red-300 ml-1">HTML</span> •{' '}
        <span className="font-bold text-gray-900 dark:text-red-300">REACT</span> •{' '}
        <span className="font-bold text-gray-900 dark:text-red-300">VUE</span>
      </div>

      <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start w-full">
        <button className="px-6 py-2.5 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md">
          Get Started
        </button>
        <button className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-300 dark:border-gray-700">
          Yearly Plan
        </button>
      </div>
    </div>
  )
}

export default MLeft
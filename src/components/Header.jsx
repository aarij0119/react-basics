import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex justify-between px-4 bg-emerald-800 py-4 text-lg font-bold font-mono'>
        <div>
            <h1>LOGO</h1>
        </div>
        <div className='flex gap-3 '>
            <a>Home</a>
            <a>About</a>
            <a>Project</a>
            <a>Blogs</a>
        </div>
    </div>
    </>
  )
}

export default Header
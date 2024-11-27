import React from 'react'

const footer = ({data}) => {
    console.log(data)
  return (
    <>
    <div className='flex items-center justify-between bg-pink-800 py-4 px-4'>
    <div className='text-white'>footer</div>
    <div className='flex gap-3'>
        <h3>{data.name}</h3>
        <h3>{data.email}</h3>
        <h3>{data.username}</h3>
        <h3>{data.age}</h3>
    </div>
    </div>
    </>
  )
}

export default footer
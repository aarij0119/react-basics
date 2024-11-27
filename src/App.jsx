import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/footer'
import { data } from 'autoprefixer';

const App = () => {
  const [fullname, setfullname] = useState('');
  const [username, setusername] = useState('');
  const [useremail, setemail] = useState('');
  const onsubmithandler = (e) => {
    e.preventDefault()
    console.log({
     fullname: fullname,
     username:username,
     useremail: useremail 
    })
    setfullname('')
    setusername('')
    setemail('')
    console.log("submitted")
    
  }
  const data = {
    name:"Aarij",
    username:"Aarij",
    age: "20",
    email: "aarijdev@gmail.com"
  } 
  return (
    <>
    
      <div className="min-h-screen bg-zinc-900">
      <Header />
        <div className='flex justify-center items-center my-28'>
        <div className="bg-zinc-700 p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={(e) => {
            onsubmithandler(e)
          }}>
            <div className="mb-4">
              <label htmlFor="name" className="block">Name</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => {
                  setfullname(e.target.value)
                }}
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block  ">Username</label>
              <input
               value={username}
               onChange={(e) => {
                setusername(e.target.value)
               }}
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block  ">Email</label>
              <input
              value={useremail}
              onChange={(e) => {
                setemail(e.target.value)
              }}
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Submit
            </button>

          </form>
        </div>
        </div>
      <Footer data={data} />  
      </div>

    </>
  )
}

export default App
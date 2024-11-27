import axios from 'axios'
import React, { useState } from 'react'


const App = () => {
  const [images, setimage] = useState([])
  const getimages = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setimage(response.data)
  }
  // 

  return (
    <>
        <div className='bg-zinc-800'>
        <button className='bg-green-500 m-2 px-2 py-1 text-white font-bold rounded' onClick={getimages}>Get Images</button>
        </div>
      <div className='w-full min-h-screen bg-zinc-900 flex gap-2 flex-wrap  px-2 py-4'>
      {images.map(function (image,key) {
        return <>
         <div className='w-1/4' key={key}>
              <img className='w-full h-full bg-cover'  src={image.download_url} />
            </div>
        </>

      })}
        </div>
      
    </>
  )
}
{

  // importing header footer

  // import Header from './components/Header';
  // import Footer from './components/footer'

  // object data
  // const data = {
  //   name:"Aarij",
  //   username:"Aarij",
  //   age: "20",
  //   email: "aarijdev@gmail.com"
  // } 

  //Using Usestate 

  // const [fullname, setfullname] = useState('');
  // const [username, setusername] = useState('');
  // const [useremail, setemail] = useState('');

  //Form Handling 

  // const onsubmithandler = (e) => {
  //   e.preventDefault()
  //   console.log({
  //    fullname: fullname,
  //    username:username,
  //    useremail: useremail 
  //   })
  //   setfullname('')
  //   setusername('')
  //   setemail('')
  //   console.log("submitted")

  // }



  /* <div className="min-h-screen bg-zinc-900">
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
      </div> */}

export default App
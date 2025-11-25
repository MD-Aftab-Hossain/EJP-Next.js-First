
"use client"
import Link from 'next/link';
import React from 'react'
import { useEffect, useState } from 'react'
import { BiLike } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";


const Explore = () => {
  const [loading, setloading] = useState(false)
  const [allposts, setposts] = useState([])
  const [maindata, setmaindata] = useState([])
  // const allposts = useLoaderData()
  useEffect(() => {
    setloading(true)
    const another = fetch(`https://artify-server-nextjs.vercel.app/posts`)
      .then(res => res.json()).then(ans => {
        setposts(ans)
        setmaindata(ans)
        // console.log(ans, liked)
        setloading(false)
      })
  }, [])

  console.log("allposts",allposts)
  const handlesearch = (e) => {
    e.preventDefault()
    setloading(true)
    const searchtext = e.target.search.value
    fetch(`https://artify-server-nextjs.vercel.app/posts/search?searchtext=${searchtext}`)
      .then(res => res.json())
      .then(ans => {
        console.log('s', ans)
        setposts(ans)
        setloading(false)
      })
  }
  const handlepainting = () => {
    const painting = maindata.filter(single => single.category === "Painting")
    setposts(painting)
  }
  const handleMixedMedia = () => {
    const mixedMedia = maindata.filter(single => single.category === "Mixed Media")
    setposts(mixedMedia)
  }
  const handleDigital = () => {
    const digital = maindata.filter(single => single.category === "Digital Art")
    setposts(digital)
  }
  const handleSculpture = () => {
    const sculpture = maindata.filter(single => single.category === "Sculpture")
    setposts(sculpture)
  }
  return (

    <div className="">
      <div className="flex flex-col justify-center items-center">
        <h1 className='font-black text-4xl text-green-600'>Explore All Artworks</h1>
      <p className='text-xl text-center max-w-[600px] text-green-600'>Browse a diverse collection of stunning artworks from talented artists around the world.</p>
      </div>
      <div className="flex p-5 justify-between items-center">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-dash btn-success text-green-600">filter<FaFilter /></div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={handlepainting}><a>Painting</a></li>
            <li onClick={handleMixedMedia}><a>Mixed Media</a></li>
            <li onClick={handleDigital}><a>Digital Art</a></li>
            <li onClick={handleSculpture}><a>Sculpture</a></li>
          </ul>
        </div>
        <form onSubmit={handlesearch} className='flex m-5 justify-center items-center'>
          <input name='search' type="text" placeholder="Search" className="input rounded-r-none input-success" />
          <button className='btn rounded-l-none bg-green-600 border-0 p-4'>Search</button>
        </form>
      </div>
      {
        loading ? <span className="loading loading-spinner text-success"></span>
          :
          <div className="grid mx-auto lg:grid-cols-3 sm:grid-cols-2 p-3.5 grid-cols-1 gap-5">
            {
              allposts.map(single => single?.situation === "Public" &&
                <div key={single._id} className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img src={single.imageurl} className="w-full h-52 object-cover rounded-t-2xl" alt={single.title} />
                  <div className="p-4 space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">{single.title}</h2>
                    <p className="text-sm text-gray-500 font-medium line-clamp-2">{single.desc}</p>
                    <p className="text-sm text-gray-500">By: {single.artist}</p>
                    <p className="text-sm text-green-600 font-medium">{single.category}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex text-2xl whitespace-nowrap text-green-600 justify-center items-center">
                        <BiLike />
                        <p className='text-xl font-medium whitespace-nowrap text-green-600'>({single.likes})</p>
                      </div>

                      <Link href={`/explore/${single._id}`}>
                        <button className="btn bg-green-600 border-0 p-4">
                          View Details
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>

              )
            }
          </div>
      }

    </div>
  )
}

export default Explore
"use client";

import React, { use, useEffect, useState } from 'react'
// import { Authcontext } from '../contextapi/Authcontext'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Manage = () => {
  // const { session?.user } = use(Authcontext)
  const { data: session, status } = useSession();
  const [my, setmy] = useState([])
  const [edited, setedited] = useState(false)
  const [del, setdel] = useState(true)
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    if (!session?.user?.email) { return }
    const datas = fetch(`https://artify-server-nextjs.vercel.app/posts/single?email=${session?.user?.email}`).then(res => res.json())
      .then(ans => {
        setmy(ans)
        setloading(false)
      })
  }, [session?.user, edited, del])
  const [clickid, setid] = useState(null)

  const handleupdate = (e) => {
    setloading(true)
    console.log('hmm')
    const title = e.target.title.value
    const imageurl = e.target.imageurl.value
    const category = e.target.category.value
    const tools = e.target.tools.value
    const situation = e.target.situation.value
    const desc = e.target.desc.value
    const dimension = e.target.dimension.value
    const price = e.target.price.value
    const editform = {
      title: title,
      imageurl: imageurl,
      category: category,
      tools: tools,
      situation: situation,
      desc: desc,
      dimension: dimension,
      price: price,
    }
    console.log(editform)
    fetch(`https://artify-server-nextjs.vercel.app/posts/${clickid}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(editform)
    }).then(() => {
      setloading(false)
      toast.success('Updated Successfully')
      setedited(!edited)
    })
  }

  const handledelete = (did) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        console.log(did)
        setloading(true)
        fetch(`https://artify-server-nextjs.vercel.app/posts/${did}`, {
          method: "DELETE"
        }).then(() => {
          setdel(!del)
          setloading(false)
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    })
  }
  return (
    <div className="">
      <div className="grid mt-5 mb-25 lg:grid-cols-3 sm:grid-cols-2 p-3.5 grid-cols-1 gap-5">
        {
          loading ?
            <span className="loading loading-spinner text-success"></span>
            :
            my.map(single =>
              <div key={single._id} className="">
                <div className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img src={single.imageurl} className="w-full h-52 object-cover rounded-t-2xl" alt={single.title} />
                  <div className="p-4 space-y-2">
                    <h2 className="text-lg font-semibold text-gray-800">{single.title}</h2>
                    <p className="text-sm text-gray-500">By: {single.artist}</p>
                    <p className="text-sm text-green-600 font-medium">{single.category}</p>

                    <div className="flex items-center justify-between mt-3">
                      
                      <Link className='btn bg-green-600 border-0 p-4' href={`/explore/${single._id}`}>View Details</Link>
                      <a className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors">
                        <button className="btn mx-3 btn-dash text-green-600 btn-success" onClick={() => {
                          document.getElementById(`my_modal_${single._id}`).showModal()
                          setid(single._id)
                        }}>Update</button>
                      </a>
                      <button onClick={() => handledelete(single._id)} className="btn btn-dash text-red-600 btn-error">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>





                <div className="">
                  {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}

                  <dialog id={`my_modal_${single._id}`} className="modal">
                    <div className="modal-box bg-white">
                      <div className="flex justify-center items-center min-h-screen p-4">
                        <form onSubmit={handleupdate} method="dialog" className='backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-2xl space-y-5 border border-green-600' action="">
                          <h2 className="text-2xl font-semibold text-center text-green-600">Add Artwork</h2>
                          <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Image URL</label>
                            <input required defaultValue={single?.imageurl} type="url" name='imageurl' placeholder="https://example.com/art.jpg"
                              className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
                              <input required defaultValue={single?.title} type="text" name='title' placeholder="My Artwork"
                                className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                              <select name="category" className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800">
                                <option>Painting</option>
                                <option>Mixed Media</option>
                                <option>Digital Art</option>
                                <option>Sculpture</option>
                              </select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Medium / Tools</label>
                              <input required defaultValue={single?.tools} name='tools' type="text" placeholder="Oil on Canvas"
                                className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Visibility</label>
                              <select name='situation' className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800">
                                <option>Public</option>
                                <option>Private</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                            <textarea required defaultValue={single?.desc} name='desc' placeholder="Write about your artwork..." rows="3"
                              className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800"></textarea>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Dimensions (optional)</label>
                              <input defaultValue={single?.dimension} name='dimension' type="text" placeholder="30x40 cm"
                                className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-600 mb-1">Price[$](optional)</label>
                              <input defaultValue={single?.price} name="price" type="text" placeholder="150"
                                className="w-full rounded-xl border border-green-600 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
                            </div>
                          </div>
                          {/* <input required defaultValue={single.} required className='input required defaultValue={single.}' name='bidded' type="number" placeholder='bid your price' /> */}
                          <button className='btn w-full bg-green-600 border-0 p-4'>Confirm</button>
                        </form>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn btn-dash w-full text-red-600 btn-error">Cancel</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>

            )
        }
        <ToastContainer autoClose={2000} />
      </div>








    </div>
  )
}

export default Manage
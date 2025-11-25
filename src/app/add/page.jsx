"use client";
import { useSession } from "next-auth/react";
import { use, useState } from "react"
// import { Authcontext } from "../contextapi/Authcontext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  // const { session?.user } = use(Authcontext)
  const { data: session, status } = useSession();
  const [loading, setloading] = useState(false)
  const handleadd = (e) => {
    e.preventDefault()
    setloading(true)
    const title = e?.target?.title?.value
    const imageurl = e?.target?.imageurl?.value
    const category = e?.target?.category?.value
    const tools = e?.target?.tools?.value
    const situation = e?.target?.situation?.value
    const desc = e?.target?.desc?.value
    const dimension = e?.target?.dimension?.value
    const price = e?.target?.price?.value
    const addform = {
      title: title,
      imageurl: imageurl,
      category: category,
      tools: tools,
      situation: situation,
      desc: desc,
      dimension: dimension,
      price: price,
      artist: session?.user?.name,
      artistemail: session?.user?.email,
      likes: 0,
      artistimg: session?.user?.photoURL,
      time: new Date()
    }
    console.log(title, dimension, desc, situation, tools, category, imageurl, price)
    fetch('https://artify-server-nextjs.vercel.app/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addform)
    }).then(() => {

      // setloading(false)
      toast.success("Art Added Successfully!")
      e.target.reset()
      setloading(false)
    })
  }

  if (loading) {
    return (
      <div className="">
        <span className="loading loading-spinner text-success"></span>
        <ToastContainer autoClose={3000} />
      </div>
    )
  }
  return (
    // loading?<p className="text-6xl font-black">loading</p>:
    <div className="flex mb-25 mt-5 justify-center items-center min-h-screen p-4">
      <form onSubmit={handleadd} className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-2xl space-y-5 border border-indigo-100">
        <h2 className="text-2xl font-semibold text-center text-green-600">Add Your Art</h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Image URL</label>
          <input required type="url" name='imageurl' placeholder="https://example.com/art.jpg"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
            <input required type="text" name='title' placeholder="My Artwork"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
            <select name="category" required className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800">
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
            <input required name='tools' type="text" placeholder="Oil on Canvas"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Visibility</label>
            <select required name='situation' className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800">
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
          <textarea required name='desc' placeholder="Write about your artwork..." rows="3"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Dimensions (optional)</label>
            <input name='dimension' type="text" placeholder="30x40 cm"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Price[$](optional)</label>
            <input name="price" type="text" placeholder="150"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-gray-800" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
            <input type="text" defaultValue={session?.user?.name} readOnly
              className="w-full rounded-xl border border-gray-200 px-4 py-2 bg-gray-50 text-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
            <input type="email" defaultValue={session?.user?.email} readOnly
              className="w-full rounded-xl border border-gray-200 px-4 py-2 bg-gray-50 text-black" />
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded-xl shadow-md transition-all">Add</button>
      </form>
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default Add

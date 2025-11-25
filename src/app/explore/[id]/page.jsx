"use client"
import { useSession } from 'next-auth/react'
import React, { use, useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { useRouter } from 'next/navigation';


const Details = ({ params }) => {
    const router = useRouter();
    const { id } = use(params)
    console.log('id', id)
    const [like, setlike] = useState(false)
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(false)
    const [fav, setfav] = useState([])
    const { data: session, status } = useSession();
    console.log(session?.user?.email)

    useEffect(() => {
        setloading(true)
        fetch(`https://artify-server-nextjs.vercel.app/posts/byid/${id}`)
            .then(res => res.json())
            .then(ans => {
                setdata(ans)
                setlike(false)
                console.log(ans)
            })
        console.log("data", data)
        const favourites = fetch(`https://artify-server-nextjs.vercel.app/favorites/single?email=${session?.user?.email}`)
            .then(res => res.json())
            .then(ans => {
                console.log('anas', ans)
                setfav(ans)
                setloading(false)
            })

    }, [like])

    const [my, setmy] = useState([])
    useEffect(() => {
        setloading(true)
        const datass = fetch(`https://artify-server-nextjs.vercel.app/posts/single?email=${data?.artistemail}`).then(res => res.json())
            .then(ans => {
                setmy(ans)
                console.log('my', ans)
                setloading(false)
            })
    }, [data])

    const handlelike = (id) => {
        setloading(true)
        fetch(`https://artify-server-nextjs.vercel.app/posts/like/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            setlike(!like)
            setloading(false)
        });
    }

    const handlefav = (id) => {
        const favdata = {
            favartid: id,
            title: data?.title,
            imageurl: data?.imageurl,
            category: data?.category,
            artist: data?.artist,
            useremail: session?.user?.email
        };
        const taken = fav.some(single => single.favartid === id);

        if (taken) {
            console.log("Already liked this artwork");
            return
        }
        else {
            // setloading(true)
            fetch("https://artify-server-nextjs.vercel.app/favorites", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(favdata)
            }).then(() => {
                setlike(!like)
                // setloading(false)
            });
        }
        // console.log('howe')
    }
    return (
        <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">

                <img src={data?.imageurl}
                    alt="Artwork"
                    className="w-full h-[480px] object-cover rounded-2xl"
                />

                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">{data?.title}</h1>
                    <p className="text-gray-500 mb-3 text-lg">Medium: {data?.tools}</p>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {data?.desc}
                    </p>
                </div>

                <div className="flex items-center gap-5 bg-gray-100 p-5 rounded-xl shadow-inner">
                    <img
                        src={data?.artistimg}
                        alt="Artist"
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700">{data?.artist}</h2>
                        <p className="text-gray-500 text-base">Total Artworks: {my.length}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-3">
                    {/* onClick={() => handlelike(data?._id)} */}
                    <button onClick={() => handlelike(data?._id)} className="btn bg-green-600 border-0 p-4">
                        <AiOutlineLike className="text-2xl" /> Like({data?.likes})
                    </button>
                    {/* onClick={()=>handlefav(data?._id)} */}
                    <button onClick={() => handlefav(data?._id)} className="btn bg-green-600 border-0 p-4">
                        Add to Favorites
                    </button>
                    <button
                        onClick={() => router.back()} // আগের পেজে ফিরে যাবে
                        className="btn bg-white text-green-600 border-0 p-4"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Details
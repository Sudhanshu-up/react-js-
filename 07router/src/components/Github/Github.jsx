import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Sudhanshu-up')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);

    //     })

    // },[])
    return (
        <div className='bg-gray-700 p-4 m-4 text-3xl text-center text-white  justify-items-center'>
      <img  className=''src={data.avatar_url} alt="dp" width="300 " />
      <h2>{data.name}</h2>
      <p>Followers: {data.followers}</p>
      <p>Repos: {data.public_repos}</p>
    </div>
        
    )
}

export default Github

 export const githubInfoLoader=async()=>{
     const response=await fetch('https://api.github.com/users/Sudhanshu-up')
     return response.json();
}

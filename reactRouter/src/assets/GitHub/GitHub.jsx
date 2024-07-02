import React from 'react';
import { useState, useEffect } from 'react';


function GitHub() {

     const[data,setData]= useState([])
     useEffect(() => {
         fetch('https://api.github.com/users/parallax-00')
             .then(Response => Response.json())
             .then(data => {
             console.log(data);
           setData(data)
         })
     }, [])
    
  return (
    <div className='bg-gray-500 m-4 text-3xl text-center'>
          GitHub Followers:{data.followers}
    </div>
  );
}

export default GitHub;



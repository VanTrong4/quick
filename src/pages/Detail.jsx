import React, { useEffect, useState } from 'react'
import useFetch from '../hook/useFetch'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams();
  const [blog,setBlog] = useState({});

  useEffect(()=>{
    useFetch({method: "get", url: `/posts/${id}`}).then((data)=>setBlog(data));
  },[]);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.body}</p>
    </div>
  )
}

export default Detail

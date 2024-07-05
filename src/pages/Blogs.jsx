import React, { useEffect, useState } from 'react'
import BtnToBlog from '../components/BtnToBlog';
import useFetch from '../hook/useFetch';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [search,setSearch] = useState("");
    
    useEffect(()=>{
      useFetch({method: 'get',url: '/posts'}).then((data)=> setBlogs(data));
    },[])

    const searchBlogs = (e) =>{
      setSearch(e.target.value);
    }
    console.log("rerender blogs");

  return (
    <>
    <input type="text" onChange={(e)=>searchBlogs(e)} value={search}/>
      <ul>
        {blogs.length ? blogs.filter((e)=>e.title.indexOf(search) !== -1).map((ele)=>(
          <li key={ele.id}>
              <h2>{ele.title}</h2>
              <p>{ele.body}</p>
              <BtnToBlog id={ele.id} />
          </li>
        )) : "loading"}
      </ul>
    </>
  )
}

export default Blogs

"use client"
import React,{useState,useEffect} from 'react';
import PromptCard from './PromptCard.jsx';


//since this component is only be needed here so, we are creating it here----

export const PromptCardList=({data,handleTagClick})=>{

  
  return (
  <div className="mt-16 prompt_layout">
  
  { data?.map((post)=>{

return <PromptCard
key={post._id}
post={post}
handleTagClick={handleTagClick}


 />
  })

  }

  </div>)
}
//---------------------------------------------------------------

const Feed = () => {

const [searchText,setSearchText]=useState('');
const [posts,setPosts]=useState([]);


const handleSearchChange=(e)=>{

}

useEffect(()=>{

const fetchPosts=async()=>{
  const response=await fetch('/api/prompt');
  const data=await response.json();
setPosts(data);


}

fetchPosts();
},[]);


  return (
    <section className="feed">

      <form className="relative w-full flex-center">
      <input
      type="text"
      placeholder="Search for a tag or username"
      value={searchText}
      onChange={handleSearchChange}
      required
      className="search_input peer"

       />

      </form>

      <PromptCardList
      data={posts}
      handleTagClick={()=>{}}
       />
    </section>
  )
}

export default Feed;
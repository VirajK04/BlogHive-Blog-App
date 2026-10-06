import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage, post}) {
  const postId = $id || post?.$id;
  const postTitle = title || post?.title;
  const imageId = featuredImage || post?.featuredImage;
    
  return (
    <Link to={`/post/${postId}`} className='w-full block h-full'>
        <div className='w-full h-full bg-gray-100 rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-200'>
            <div>
                <div className='w-full h-48 mb-4 overflow-hidden rounded-xl bg-gray-200'>
                    {imageId ? (
                        <img 
                            src={appwriteService.getFilePreview(imageId)} 
                            alt={postTitle}
                            className='w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300' 
                        />
                    ) : (
                        <div className='w-full h-full flex items-center justify-center text-gray-400 text-sm'>
                            No Image
                        </div>
                    )}
                </div>
                <h2 className='text-xl font-bold text-gray-800 line-clamp-2'>
                    {postTitle}
                </h2>
            </div>
        </div>
    </Link>
  )
}

export default PostCard
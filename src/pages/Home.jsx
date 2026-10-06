import React, { useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authStatus) {
            setLoading(true)
            appwriteService.getPosts()
                .then((posts) => {
                    if (posts) {
                        setPosts(posts.documents)
                    }
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setPosts([])
            setLoading(false)
        }
    }, [authStatus])
    
    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className='text-2xl font-bold hover:text-gray-500'>Login to read posts</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="w-full py-16 text-center">
                <Container>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-500 font-medium">Loading posts...</p>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className='text-2xl font-bold hover:text-gray-500'>No posts found</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home

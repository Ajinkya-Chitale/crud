import React, { useContext, useEffect } from 'react'
import ShowPosts from '../components/ShowPosts'
import { getPosts } from '../services/services';
import { PostContext } from '../services/PostContextProvider';
import Loader from '../components/Loader';

const Home = () => {
    const { setData, isLoading, setIsLoading } = useContext(PostContext);

    const getAllPosts = async () => {
        try {
            setIsLoading(true);
            const response = await getPosts();
            if (response.status !== 200) {
                throw new Error('Fail to get list of posts');
            }
            else {
                setIsLoading(false);
                setData(response.data);
            }
        }
        catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    return (
        <div>
            {isLoading ? <Loader /> : <ShowPosts />}
        </div>
    )
}

export default Home
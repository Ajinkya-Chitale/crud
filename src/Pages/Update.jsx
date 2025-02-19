import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router';
import { PostContext } from '../services/PostContextProvider';
import { updatePost } from '../services/services';
import { toast } from 'react-toastify';

const Update = () => {
    const navigate = useNavigate();
    const { post, setPost, setIsLoading } = useContext(PostContext);
    const handleOnChange = (e) => {
        setPost(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const { id } = useParams();

    const handleUpdatePost = async (e) => {
        e.preventDefault();

        if (post.title !== "" && post.description !== "") {
            try {
                setIsLoading(true);
                let response = await updatePost(id, JSON.stringify(post));

                if (response.status !== 200) {
                    throw new Error('Not able to update post.')
                }
                else {
                    setIsLoading(false);
                    toast('Post Updated Successfully!', {
                        autoClose: 3000,
                    });
                    navigate('/');
                }
            }
            catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        }
        else {
            console.log('Please Enter details in all mandatory fields.');
        }
    }

    return (
        <div className='container p-5 mx-auto'>
            <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update Post Details:</h1>
                <form onSubmit={handleUpdatePost} action='' className='flex items-start flex-col gap-4 mx-auto'>
                    <div className='flex flex-col'>
                        <label className='text-left' htmlFor="postTitle">Title <span className='align-super text-red-500'>*</span></label>
                        <input id='postTitle' type="text" name='title' className='border px-2 py-1 rounded-md w-72 sm:w-80' placeholder='Enter Post Title' value={post.title} onChange={(e) => handleOnChange(e)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-left' htmlFor="postDesc">Description <span className='align-super text-red-500'>*</span></label>
                        <textarea rows={4} className='border rounded-md w-72 sm:w-80 px-2 py-1' name="description" id="postDesc" placeholder='Enter Post Description' value={post.description} onChange={(e) => handleOnChange(e)}></textarea>
                    </div>
                    <div className='w-full flex gap-4 justify-end'>
                        <button type='submit' className='border bg-green-400 text-white font-semibold py-1 px-5 rounded-md'>Update Post</button>
                        <button type='button' className='border bg-blue-400 text-white font-semibold py-1 px-5 rounded-md' onClick={() => navigate('/')}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update

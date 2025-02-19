import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { addPost } from '../services/services';
import { PostContext } from '../services/PostContextProvider';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate();
    const { post, setPost, setIsLoading, error, setError } = useContext(PostContext);

    const handleSavePost = async (e) => {
        e.preventDefault();

        if (post.title !== "" && post.description !== "") {
            try {
                setIsLoading(true);
                let response = await addPost(JSON.stringify(post));

                if (response.status !== 201) {
                    throw new Error('Not able to add new post.')
                }
                else {
                    setIsLoading(false);
                    toast('Post Addded Successfully!', {
                        autoClose: 3000,
                    }
                    );
                    setPost({
                        "title": "",
                        "description": ""
                    })
                }
            }
            catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        }
        else {
            setError('Please enter details in all mandatory fields.');
        }
    }

    const handleOnChange = (e) => {
        setPost(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        setError('');
    }

    return (
        <div className='container p-5 mx-auto'>
            <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Enter Post Details:</h1>
                <form onSubmit={handleSavePost} action='' className='flex items-start flex-col gap-4 mx-auto'>
                    <div className='flex flex-col'>
                        <label className='text-left' htmlFor="postTitle">Title <span className='align-super text-red-500'>*</span></label>
                        <input id='postTitle' type="text" name='title' className='border px-2 py-1 rounded-md w-72 sm:w-80' placeholder='Enter Post Title' value={post.title} onChange={(e) => handleOnChange(e)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-left' htmlFor="postDesc">Description <span className='align-super text-red-500'>*</span></label>
                        <textarea rows={4} className='border rounded-md w-72 sm:w-80 px-2 py-1' name="description" id="postDesc" placeholder='Enter Post Description' value={post.description} onChange={(e) => handleOnChange(e)}></textarea>
                    </div>
                    <p className='text-red-500 text-sm'>{error}</p>
                    <div className='w-full flex gap-4 justify-end'>
                        <button type='submit' className='border bg-green-400 text-white font-semibold py-1 px-5 rounded-md'>Save Post</button>
                        <button type='button' className='border bg-blue-400 text-white font-semibold py-1 px-5 rounded-md' onClick={() => navigate('/')}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
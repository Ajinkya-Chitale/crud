import React, { useContext } from 'react'
import { MdDelete, MdEdit, MdAdd } from "react-icons/md";
import { useNavigate } from 'react-router';
import { PostContext } from '../services/PostContextProvider';
import ModalDialog from './ModalDialog';

const ShowPosts = () => {
    const { data, setPost, setOpen, setDeleteId } = useContext(PostContext);
    const navigate = useNavigate();

    const handleCreatePost = (e) => {
        e.preventDefault();
        setPost({
            "title": "",
            "description": ""
        })
        navigate('/Create')
    }

    const handlleDeletePost = async (id) => {
        setDeleteId(id);
        setOpen(true);
    }

    const handleUpdatePost = (id, title, body) => {
        setPost({
            "title": title,
            "description": body
        })
        navigate(`/Update/${id}`);
    }

    return (
        <section className="text-gray-600 body-font">
            <div className='flex justify-end mb-4 me-4 sm:me-24 md:me-28 lg:me-28 xl:me-36'>
                <button type='button' className='flex items-center justify-center gap-1 border bg-blue-400 text-white font-semibold py-1 px-5 rounded-md' onClick={handleCreatePost}><MdAdd className='text-xl' /> Add Post</button>
            </div>
            <div className='flex flex-wrap justify-center gap-3'>
                {data.map(post => {
                    const { id, title, body } = post;

                    return (
                        <div className='flex flex-col justify-between lg:w-1/4 sm:w-1/3 sm:mx-0 mx-4 p-2 border border-teal-100 rounded-lg' key={id}>
                            <div>
                                <h2 className='tracking-widest text-sm title-font font-medium text-indigo-500 mb-1'>{title}</h2>
                                <p>{body}</p>
                            </div>
                            <div className='flex justify-end gap-3 mt-3'>
                                <button type='button' className='border p-2 rounded-md text-orange-400 font-semibold text-2xl' onClick={() => handleUpdatePost(id, title, body)}>
                                    <MdEdit />
                                </button>

                                <button type='button' className='border p-2 rounded-md text-red-500 font-semibold text-2xl' onClick={() => handlleDeletePost(id)}>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <ModalDialog />
        </section>
    )
}

export default ShowPosts

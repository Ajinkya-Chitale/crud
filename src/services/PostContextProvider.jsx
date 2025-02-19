import React, { createContext, useState } from 'react'

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
    const [data, setData] = useState([]); // States used on Home Page

    // States used on Create Page
    const [post, setPost] = useState({
        "title": "",
        "description": ""
    })

    const [isLoading, setIsLoading] = useState(false);  //Loading State
    const [open, setOpen] = useState(false) // Modal Dialog State

    const [error, setError] = useState(""); // Error message handling

    const [deleteId, setDeleteId] = useState(0); // Delete Post state

    return (
        <PostContext.Provider value={{ data, setData, post, setPost, isLoading, setIsLoading, open, setOpen, error, setError, deleteId, setDeleteId }}>
            {children}
        </PostContext.Provider>
    )
}
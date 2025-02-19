import React, { useContext } from 'react'
import { PostContext } from '../services/PostContextProvider'
import { Bars } from 'react-loader-spinner'

const Loader = () => {
    const { isLoading } = useContext(PostContext)
    return (
        <>
            {isLoading ?
                <div className="h-full w-full fixed top-0 left-0 bg-black/20 z-[99999]">
                    <div className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                        <Bars
                            height="50"
                            width="50"
                            color="#6366f1"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div> :
                null}
        </>
    )
}

export default Loader

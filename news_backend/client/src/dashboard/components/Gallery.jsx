import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
import copy from 'copy-text-to-clipboard';
import toast from 'react-hot-toast';

const Gallery = ({ setShow, videos }) => {

    const copy_url = (url) => {
        copy(url);
        toast.success('URL copied to clipboard');
    }

    return (
        <div className='w-screen h-screen fixed left-0 top-0 z-[9999]'>
            <div className='w-full h-full relative'>
                <div className='bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]'></div>
                <div className='absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]'>
                    <div className='pb-3 flex justify-between items-center w-full'>
                        <h2>Gallery</h2>
                        <div onClick={() => setShow(false)} className='text-xl cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="videos" className={`w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}>
                            <div className='flex justify-center items-center flex-col gap-y-2'>
                                <span className='text-2xl'><MdCloudUpload /></span>
                                <span>Select Video</span>
                            </div>
                        </label>
                    </div>

                    <div className='grid grid-cols-2 gap-x-2 mt-3'>
                        {videos.length > 0 && videos.map((video, i) => (
                            <div className='cursor-pointer' onClick={() => copy_url(video.url)} key={i}>
                                <video src={video.url} className='w-full h-[100px]' controls />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;

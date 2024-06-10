import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { BsColumnsGap } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";


function Modal({ onClose }) {

    return (
        <>

            <div className='fixed z-10 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-35 w-full h-full flex justify-center items-center'>
                <div className='mx-auto bg-white shadow-md rounded-md w-full max-w-xl'>

                    <div className='flex min-h-64'>

                        <div className='max-w-sm bg-slate-50 p-2 border-r-2 border-slate-200 rounded-md'>

                            <div className='flex items-center justify-between gap-2 p-2 rounded-md hover:bg-slate-200 cursor-pointer'>
                                <div className='flex items-center text-sm gap-1 text-slate-700'>
                                    <CiCalendar />
                                    <span>Scheduled Date</span>
                                </div>
                                <div>
                                    <span className='text-sm text-slate-500'>1</span>
                                </div>
                            </div>


                            <div className='flex items-center gap-2 p-2 rounded-md text-sm text-slate-700 hover:bg-slate-200 cursor-pointer'>
                                <TbUsers />
                                <span>People</span>
                            </div>


                            <div className='flex items-center gap-2 p-2 rounded-md text-sm text-slate-700 hover:bg-slate-200 cursor-pointer'>
                                <BsColumnsGap />
                                <span>Services/Products</span>
                            </div>
                        </div>



                        <div className='p-4 gap-5 w-full space-y-5'>

                            <div className='text-sm font-medium'>
                                <div className='w-full text-slate-700'>Show orders for</div>
                                <div className='w-full py-1 px-2 flex items-center justify-between gap-2 shadow-sm rounded-md border-2 border-zinc-200'>
                                    <div>
                                        <span className='text-slate-700'>All time</span>
                                    </div>
                                    <div className='text-zinc-500'>
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </div>


                            <div className='w-full flex items-center justify-between gap-5'>

                                <div className='w-1/2'>
                                    <span className='text-sm text-slate-700'>From</span>
                                    <div className='px-2 py-1 gap-1 text-sm border-2 border-slate-200 rounded-md flex items-center text-slate-600'>
                                        
                                            <CiCalendar />
                                            <span>Pick a date</span>
                                        
                                    </div>
                                </div>

                                <div className='w-1/2'>
                                    <span className='text-sm text-slate-700'>To</span>
                                    <div className='px-2 py-1 gap-1 text-sm border-2 border-slate-200 rounded-md flex items-center text-slate-600'>
                                        <CiCalendar />
                                        <span>Pick a date</span>
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>

                    <div className='flex items-center justify-end p-3'>
                        <div className='flex items-center justify-between gap-4'>
                            <div className='bg-zinc-100 hover:bg-zinc-200 shadow-sm rounded-md px-2 py-1 cursor-pointer'>
                                <span className='text-sm font-medium text-zinc-950'>Reset to default</span>
                            </div>

                            <button onClick={onClose} className='bg-slate-700 hover:bg-slate-900 px-2 py-1 rounded-md gap-2'>
                                <span className='text-white text-sm'>Apply</span>
                            </button>
                        </div>
                    </div>

                </div>

            </div>



        </>
    )
}

export default Modal
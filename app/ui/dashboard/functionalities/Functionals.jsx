"use client"
import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { FiColumns } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import Modal from '../modal/Modal';

function Functionals() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <>

            {/* w-[1195px] */}
            {/* h-[112px] */}
            <div className='w-full border-1 px-3 py-4 gap-4'>

                {/* w-[1108px] */}

                <div className=' h-[40px] gap-4'>

                    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4'>

                        {/* w-[359.33px] */}
                        <div className='bg-white border-solid border-[1px] border-slate-500 h-[40px] rounded-md px-2 py-3 gap-1 font-semibold text-slate-700 text-xs flex '>All Waitlist
                            <div style={{ fontSize: '10px' }} className='text-slate-500 font-medium'>
                                100
                            </div>
                        </div>

                        {/* w-[359.33px] */}
                        <div className='bg-white border-solid border-[1px] border-slate-500 h-[40px] rounded-md px-2 py-3 gap-1 font-semibold text-slate-700 text-xs flex '>Newly Added
                            <div style={{ fontSize: '10px' }} className='text-slate-500 font-medium'>
                                50
                            </div>
                        </div>

                        {/* w-[359.33px] */}
                        <div className='bg-white border-solid border-[1px] border-slate-500 h-[40px] rounded-md px-2 py-3 gap-1 font-semibold text-slate-700 text-xs flex '>Leads
                            <div style={{ fontSize: '10px' }} className='text-slate-500 font-medium'>
                                20
                            </div>
                        </div>

                    </div>
                </div>

                {/* w-[1163px] */}
                <div className='lg:flex md:grid grid-cols-2 items-center justify-between  h-[32px] mt-4'>

                    <div className='cursor-pointer'>
                        <button onClick={() => setOpenModal(true)} className='flex items-center px-2 py-1 bg-slate-100 text-sm text-slate-700 rounded-md gap-1'> <CiFilter className='h-4 w-4' /> Add Filter</button>
                    </div>

                    {/* Modal */}

                    {
                        openModal && (
                            <div>
                            <Modal onClose = {() =>setOpenModal(false)} />
                        </div>
                        )
                    }


                    <div className='flex items-center justify-evenly gap-4 px-2'>

                        <div className='flex items-center bg-white rounded-sm shadow-md w-60 relative text-sm p-1.5'>

                            <input placeholder='Search Client' className='searchbox w-56 h-full rounded-sm bg-white ml-6 text-slate-700 outline-none'>

                            </input>

                            <FiSearch className='absolute text-slate-500 ml-1' />

                        </div>

                        <div className='reload text-slate-700'>
                            <TfiReload />
                        </div>

                        <div className='columnSymbol text-slate-700'>
                        <FiColumns />
                        </div>

                        <div className='download text-slate-700'>
                        <LuDownload />
                        </div>


                    </div>

                </div>


            </div>

        </>
    )
}

export default Functionals
import React from 'react'
import { RiExpandUpDownLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Footsection() {
    return (
        <>
            <div>

                <div className='flex items-center justify-between b-indigo-500 px-3 py-4'>

                    <div className='flex gap-1 items-center'>

                        <span className='text-sm text-slate-500'>Displaying</span>

                        <div className='flex rounded-md px-2 py-1 items-center justify-center bg-slate-50'>
                            <span>15</span>
                            <div className='flex items-center'>
                                <RiExpandUpDownLine />
                            </div>
                        </div>

                        <div className='flex font-medium'>
                            <span className='text-slate-500' >out of</span>
                            <span className='ml-1'>104</span>
                        </div>

                    </div>

                    <div className='flex items-center'>
                        <div className='flex items-center rounded-md px-2 py-1 gap-2 font-medium text-sm text-slate-700'>
                            <div>
                                <FaAngleLeft />
                            </div>
                            <span>Previous</span>

                        </div>

                        <div className='flex items-center' >
                            <div className='rounded-md px-3 py-2 gap-2'>1</div>
                            <div className='rounded-md px-3 py-2 gap-2 border border-1 border-slate-200'>2</div>
                            <div className='rounded-md px-3 py-2 gap-2'>3</div>
                        </div>

                        <div className='flex items-center rounded-md px-2 py-1 gap-2 text-slate-700 font-medium text-sm'>

                            <span className=''>Next</span>
                            <div><FaAngleRight /></div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footsection
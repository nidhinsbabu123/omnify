import React from 'react'
import styles from './toolbar.module.css'
import { BiDockLeft } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { RxReload } from "react-icons/rx";

function Toolbar() {
  return (
    <>

      <div className='ontainer w-full rounded-lg flex items-center p-6 shadow-md h-[52px] gap-4'>
        <div className='traficlights hidden md:flex items-center justify-between h-[12px] top-5 gap-2'>
          <div className='w-[12px] h-[12px] rounded-full bg-red-500'></div>
          <div className='w-[12px] h-[12px] rounded-full bg-yellow-500'></div>
          <div className='w-[12px] h-[12px] rounded-full bg-green-500'></div>
        </div>

        <div className='toolbariconOneDiv top-3 hidden md:flex items-center justify-center p-1 rounded-md text-neutral-500 text-lg'>
          <BiDockLeft />
        </div>

        <div className='paginationArrowsContainer hidden md:flex items-center justify-center'>
          <div className='paginationArrows flex items-center justify-center cursor-pointer text-neutral-500 px-1'>
            <FaAngleLeft />
          </div>

          <div className='paginationArrows flex items-center justify-center cursor-pointer text-neutral-500 px-1'>
            <FaAngleRight />
          </div>
        </div>

        <div className='titleAndShieldContainer w-1/2 flex mx-auto gap-2 items-center justify-center'>

          <div className='shieldIconDiv p-1 rounded-md text-neutral-500'>
            <FaShieldAlt />
          </div>

          <div style={{ backgroundColor: 'rgba(235, 238, 240, 0.8)' }} className='lockTitleAndRefreshcontainer px-1 py-2 rounded-md flex items-center justify-center text-center w-5/6'>
            <div className='lockAndTitleContainer rounded-md flex items-center justify-center mx-auto text-sm absolute'>
              <div>
                <IoLockClosed className={styles.lock} />
              </div>

              <span className={styles.titlename}>app.getomnify.com</span>
            </div>

            <div className='reloadDiv ml-auto'>
              <RxReload className={styles.reload} />
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Toolbar
import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Toolbar from '../ui/dashboard/toolbar/Toolbar'
import styles from "../ui/dashboard/dashboard.module.css"


function layout({ children }) {
    return (
        <>
            <Toolbar />

            <div className='container'>

                <div className='flex'>

                    {/* className={styles.menu} */}
                    <div className='max-w-sm'>
                        <Sidebar />
                    </div>

                    {/* className={styles.content} */}
                    <div className='w-[83vw]'>
                        {children}
                    </div>

                </div>

            </div>




        </>
    )
}

export default layout
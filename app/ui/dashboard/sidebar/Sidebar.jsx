"use client"
import React from 'react'
import styles from "./sidebar.module.css"
import { FaInbox } from "react-icons/fa";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { LuHourglass } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import Image from 'next/image';
import { PiSquareHalfFill } from "react-icons/pi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsColumnsGap } from "react-icons/bs";
import { PiArrowSquareOut } from "react-icons/pi";
import { usePathname } from 'next/navigation';




const menuItems = [
    {
        title: "Orders",
        path : "/dashboard/orders",
        icon: <FaInbox />
    },
    {
        title: "Subscriptions",
        path : "/dashboard/subscriptions",
        icon: <RiCheckboxMultipleLine />
    },
    {
        title: "Calender",
        path : "/dashboard/calender",
        icon: <SlCalender />
    },
    {
        title: "Waitlist",
        path : "/dashboard/waitlist",
        icon: <LuHourglass />
    }
]

function Sidebar() {

    const pathname = usePathname()

    console.log(pathname);

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.logoheadMainContainer}>
                    <div className={styles.logoheadMain}>

                        <div className={styles.logohead}>
                            <Image src="/logos.png" alt="No Img" width={22} height={22} />
                            <div className={styles.frontdeskbox}>
                                <span className='text-lg font-bold'>Front-Desk</span>
                            </div>
                            <div className={styles.frontdeskCollapse}>
                                <PiSquareHalfFill className='w-[25px] h-[25px]' />
                            </div>

                        </div>

                    </div>
                </div>

                <div className={styles.locationListDashboard} >

                    <div className='w-[212px] h-[83px]'>

                        <div className='w-[212px] h-[36px] shadow-md rounded-md z-50 relative'>
                            <div className={styles.locationMain}>
                                <div className='w-[192px] h-[20px] gap-2 flex items-center justify-center'>
                                    <div className={styles.locationName}>
                                        <p>Location Name</p>
                                    </div>
                                    <div className={styles.locationNameIcon}>
                                        <FaArrowRightArrowLeft />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.datetimebox}>
                            <div className={styles.timeDateAndZone}>

                                <div className={styles.dateshow}>

                                    <div className={styles.dateAndTime}>
                                        <div className={styles.presentTime}>
                                            <span>08:30 AM</span>
                                        </div>

                                        <div className={styles.presentDate}>
                                            <span>Tue 20 Jan</span>
                                        </div>

                                    </div>

                                </div>

                                <div className={styles.globeAndTimeZOne}>
                                    <div className='text-gray-400 w-[13px] h-[13px] font-extrabold'>
                                        <GoGlobe />
                                    </div>
                                    <div className={styles.timezone}>
                                        <h1>UTC : +5 hours</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='b-red-500 mt-7 cursor-pointer'>

                                <FaAngleDown />

                            </div>

                        </div>


                    </div>


                    <ul className={styles.list}>

                        {menuItems.map(cat => (

                            <li className={styles.listItems} key={cat.title}>
                                {cat.icon} {cat.title}</li>
                        ))}

                    </ul>

                    <div className={styles.dashboardShortcutContainer}>

                        <div className={styles.dashboardicons}>
                        <BsColumnsGap />
                        </div>

                        <div className={styles.dashboardtext}>
                            Dashboard
                        </div>

                        <div className={styles.dashboardicons}>
                            <PiArrowSquareOut />
                        </div>

                    </div>

                </div>

                <div className={styles.userAndHelp}>

                    <div className={styles.userParent}>

                        <div className={styles.userDetailAndArrow}>
                            <div className={styles.user}>

                                <Image src="/image.png" alt='No Img' width={24} height={24} className='rounded-full flex items-center justify-center' />

                                <div className={styles.userDetail}>

                                    <span className={styles.adminname}>Admin Name</span>
                                    <span className={styles.adminmailid}>adminname@mail.com</span>

                                </div>

                            </div>

                            <div>
                                <FaAngleDown className='w[16px] h-[16px]' />
                            </div>

                        </div>

                    </div>

                    <div className={styles.helpdivcontainer}>

                        <div className={styles.helpdiv}>

                            <div className={styles.quesHelp}>

                                <div className={styles.quesIcon}>

                                    <AiOutlineQuestionCircle />

                                </div>

                                <div className={styles.helpDetails}>

                                    <div className={styles.helpCenter}>Help Center</div>

                                    <div className={styles.helpTag}>@2024 Omnify.Inc.</div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Sidebar
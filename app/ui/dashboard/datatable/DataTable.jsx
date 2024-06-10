import React from 'react';
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { LiaDotCircleSolid } from "react-icons/lia";
import { GoHash } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

function DataTable() {
    return (
        <div className='container'>
            <div className='w-full overflow-x-auto'>
                <div className='h-[90vh] w-full overflow-y-auto'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                                    <input type="checkbox" />
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                                    <IoCalendarClearOutline className="inline mr-1" /> Created On
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                                    <FiUser className="inline mr-1" /> Payer
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 flex items-center tracking-wider'>
                                    <LiaDotCircleSolid className="inline mr-1" /> Status
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                                    <GoHash className="inline mr-1" /> Email
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                                    <GoHash className="inline mr-1" /> Payer Phone
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                                    <GoHash className="inline mr-1" /> Services
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'>
                                    <IoCalendarClearOutline className="inline mr-1" /> Scheduled
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 07 Jan 2024 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Theodore T.C. Calvin
                                </td>
                                <td className='bg-blue-50 text-blue-500 rounded-2xl gap-1 px-1 py-1 flex items-center justify-center text-xs font-medium whitespace-nowrap w-[54px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Lead
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    theodore@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966559186876
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Private Language Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 07 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sat, 06 Jan 2024 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Hannibal Smith
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Active
                                </td> */}
                                <td className='bg-green-50 text-green-500 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[63px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Active
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    hannibalsmith@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966578632254
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Swim beginner for class new Sess...
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 07 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Fri, 05 Jan 2024 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    April Curtis
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Inactive
                                </td> */}
                                <td className='bg-slate-100 text-slate-700 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[71px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Inactive
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    aprilcurtis@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966558441503
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Fitness Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sat, 06 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* Row 4 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Thu, 04 Jan 2024 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Michael Knight
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Active
                                </td> */}
                                <td className='bg-green-50 text-green-500 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[63px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Active
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    smith@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966536605363
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Arobics Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 07 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* Row 5 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Wed, 03 Jan 2024 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Templeton Peck
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Active
                                </td> */}
                                <td className='bg-green-50 text-green-500 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[63px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Active
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    michaelknight@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966503534287
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Boxing Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Fri, 05 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* row 6 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Tue, 02 Jan 2024 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Theodore T.C. Calvin
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Active
                                </td> */}
                                <td className='bg-green-50 text-green-500 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[63px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Active
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    hannibalsmith@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966530269650
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Kids play Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Thu, 04 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* row 7 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Mon, 01 Jan 2024 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Michael Knight
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm flex items-center font-medium whitespace-nowrap'>
                                <GoDotFill className='inline' /> Lead
                                </td> */}
                                <td className='bg-blue-50 text-blue-500 rounded-2xl gap-1 px-1 py-1 flex items-center justify-center text-xs font-medium whitespace-nowrap w-[54px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Lead
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Mikeh@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966566182220
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Appointment Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sat, 06 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* row 8 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 30 Dec 2023 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Mike Torello
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm flex items-center font-medium whitespace-nowrap'>
                                <GoDotFill className='inline' /> Lead
                                </td> */}
                                <td className='bg-blue-50 text-blue-500 rounded-2xl gap-1 px-1 py-1 flex items-center justify-center text-xs font-medium whitespace-nowrap w-[54px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Lead
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    hannibalsmith@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966544628109
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Exercise Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sat, 29 Dec 2023 2:42 PM
                                </td>
                            </tr>

                            {/* row 9 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sat, 29 Dec 2023 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Templeton Peck
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm flex items-center font-medium whitespace-nowrap'>
                                <GoDotFill className='inline' /> Lead
                                </td> */}
                                <td className='bg-blue-50 text-blue-500 rounded-2xl gap-1 px-1 py-1 flex items-center justify-center text-xs font-medium whitespace-nowrap w-[54px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Lead
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    templeto@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966594805058
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Session Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 07 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* row 10 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Wed, 28 Dec 2023 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Peter Thornton
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Inactive
                                </td> */}
                                <td className='bg-slate-100 text-slate-700 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[71px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Inactive
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    peterthornton@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966558441497
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Boxing Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Wed, 03 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* row 11 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 26 Dec 2023 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Lynn Tanner
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Inactive
                                </td> */}
                                <td className='bg-slate-100 text-slate-700 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[71px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Inactive
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Lynn@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966506424822
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Fitness Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Mon, 27 Dec 2023 2:42 PM
                                </td>
                            </tr>

                            {/* row 12 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 25 Dec 2023 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Col. Roderick Decker
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm flex items-center font-medium whitespace-nowrap'>
                                <GoDotFill className='inline' /> Lead
                                </td> */}
                                <td className='bg-blue-50 text-blue-500 rounded-2xl gap-1 px-1 py-1 flex items-center justify-center text-xs font-medium whitespace-nowrap w-[54px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Lead
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    decker@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966558441493
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Kids play Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Sun, 07 Jan 2024 2:42 PM
                                </td>
                            </tr>

                            {/* row 13 */}
                            <tr>
                                <td className='px-6 text-sm text-gray-700 font-medium py-4 whitespace-nowrap'>
                                    <input type="checkbox" />
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Wed, 28 Dec 2023 2:42 PM
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Peter Thornton
                                </td>
                                {/* <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Inactive
                                </td> */}
                                <td className='bg-slate-100 text-slate-700 rounded-2xl gap-1 px-1 py-1 flex items-center text-xs font-medium whitespace-nowrap w-[71px] h-[24px] mt-4 ml-4'>
                                <GoDotFill className='inline' /> Inactive
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    peterthornton@gmail.com
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    +91 +966558441497
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Boxing Session
                                </td>
                                <td className='px-6 py-4 text-gray-700 text-sm font-medium whitespace-nowrap'>
                                    Wed, 03 Jan 2024 2:42 PM
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DataTable;

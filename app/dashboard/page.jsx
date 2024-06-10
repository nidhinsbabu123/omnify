import React from 'react'
import OptionTitle from '../ui/dashboard/optiontitle/OptionTitle'
import styles from '../ui/dashboard/dashboard.module.css'
import Functionals from '../ui/dashboard/functionalities/Functionals'
import DataTable from '../ui/dashboard/datatable/DataTable'
import Footsection from '../ui/dashboard/footsection/Footsection'

function page() {
  return (
    <>

      <div className='container-fluid'>

        <div className={styles.waitlist}>

          <OptionTitle/>

        </div>

        <div>

          <Functionals/>

        </div>

        <div>

          <DataTable/>

        </div>

        <div>

          <Footsection/>

        </div>

      </div>

    </>
  )
}

export default page
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Admission.module.css'
import TimeLineItem from './TimeLineItem'
const Admission = () => {
    return (
        <div className="bg-blue-200 pb-32">
            <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 mt-16 bg-blue-500 rounded-lg border-2">
                    <p className="text-2xl leading-relaxed mt-4 mb-4 text-white font-bold ">
                        Admission Steps
                    </p>
                </div>
            </div>
            <div className={`${styles.timeline} pt-20 bg-blue-100 `}>
                <TimeLineItem title='1. Registraton *' orentation='left'>Registraton can be done Online / Ofline. <Link to='/' className='text-blue-500'><b> Download offline Form</b></Link> / <Link to='/' className='text-blue-500 '><b> Apply Online</b></Link></TimeLineItem>
                <TimeLineItem title='2. Test*' orentation='right'>Minmum 60% marks required in the test for admssion. Test will contain questons from Math, Science, Hindi, English<br /><Link to='/' className='text-blue-500'><b> See sample question</b></Link>  </TimeLineItem>
                <TimeLineItem title='3. Intervew' orentation='left'>Personal intervew to check communication skill / and spoken englsh</TimeLineItem>
                <TimeLineItem title='4. Enrollment number allocaton' orentation='right'></TimeLineItem>
                <TimeLineItem title='5. Admission' orentation='left'></TimeLineItem>
            </div>
        </div>
    )
}
export default Admission
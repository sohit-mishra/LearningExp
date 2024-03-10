import ActiveBatches from '../assets/ActiveBatches.svg';
import CourseBatch from '../assets/CourseBatch.svg';
import BatchComplete from '../assets/BatchComplete.svg';
import './CertificateModule.css';

export default function Certificate() {
  return (
    <div className='container Batch'>
     <h1>We Completed 1200+ Certification Program Successfully & Counting</h1> 
     <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
     <div className="flex">
        <div className="BatchCard">
            <div className="left"><img src={BatchComplete} alt="" /></div>
            <div className="right">
                <h4>100+</h4>
                <p>Batch Complete</p>
            </div>
        </div>

        <div className="BatchCard">
            <div className="left"><img src={ActiveBatches} alt="" /></div>
            <div className="right">
                <h4>50+</h4>
                <p>Active Batches</p>
            </div>
        </div>

        <div className="BatchCard">
            <div className="left"><img src={CourseBatch} alt="" /></div>
            <div className="right">
                <h4>10,000+</h4>
                <p>Student Satisfied</p>
            </div>
        </div>

        <div className="BatchCard">
            <div className="left"><img src={CourseBatch} alt="" /></div>
            <div className="right">
                <h4>10+</h4>
                <p>Course Modules</p>
            </div>
        </div>
        
     </div>
    </div>
  )
}

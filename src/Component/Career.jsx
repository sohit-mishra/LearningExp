import Play from '../assets/Play.svg'
import video from '../assets/video.png'
import './CareerModule.css';

export default function Career() {
  return (
    <div className='container Career'>
        <h1>Why Us</h1>
        <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
        <div className="flex">
            <div className="left">
                <img src={video} alt="" />
                <div className="videoplay">
                  <img src={Play} alt="" />
                </div>
                
            </div>
            <div className="right">
                <h3>Crafting Your Dream Career:<br/> Building a Path You Love with us</h3>
                <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
                <p>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</p>
                <button>Get More</button>
            </div>
        </div>
      
    </div>
  )
}

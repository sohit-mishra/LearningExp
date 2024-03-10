import Play from '../assets/Play.svg'
import video from '../assets/video.png'
import arrowRight from '../assets/arrowRight.svg'
import './HeaderModule.css';

export default function Header() {
    return (
        <header>
                <div className='Header container'>
                    <div className="flex">
                        <div className="left">
                            <h1>We Create Learning Experience With Excellent Technology.</h1>
                            <p>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</p>
                            <div className="btn">
                                <button>Book Demo Class</button>
                                <button>Explore More <img src={arrowRight} alt="" /></button>
                            </div></div>

                        <div className="right">
                            <img src={video} alt="" />
                            <div className="videoplay">
                                <img src={Play} alt="" />
                            </div>
                        </div>
                    </div>
                </div>  
        </header>
    )
}

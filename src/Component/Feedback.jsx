import './FeedbackModule.css';
import arrowRight from '../assets/arrowRight.svg';
import user from '../assets/user.png';
import Star from '../assets/Star.svg';

export default function Feedback() {
    return (
        <div className="feedback">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2>Our Students Feedback</h2>
                        <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p></div>
                    <div className="right">
                        <h4>Read More</h4>
                        <img src={arrowRight} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={user} alt="" />
                    </div>
                    <div className="right">
                        <ul>
                            <li><img src={Star} alt="" /></li>
                            <li><img src={Star} alt="" /></li>
                            <li><img src={Star} alt="" /></li>
                            <li><img src={Star} alt="" /></li>
                            <li><img src={Star} alt="" /></li>
                        </ul>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem.</p>
                        <h4>Riad Isalm</h4>
                        <p>Product Manager.<span>@Learning.Com</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

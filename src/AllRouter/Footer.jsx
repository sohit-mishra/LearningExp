import { Link } from "react-router-dom";
import './FooterModule.css';
import Facebook from '../assets/Facebook.svg';
import Linkedin from '../assets/Linkedin.svg';
import pinterest from '../assets/pinterest.svg';
import twitter from '../assets/twitter.svg';
import FooterLogo from '../assets/FooterLogo.svg';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="top">
                        <div id="first">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={FooterLogo} alt="" id="footerlogo" />
                                <h4 style={{ fontSize: "x-large", color: "#707070" }}>Learning Exp.</h4>
                            </div>
                            <ul>
                                <li><img src={Facebook} alt="" /></li>
                                <li><img src={twitter} alt="" /></li>
                                <li><img src={pinterest} alt="" /></li>
                                <li><img src={Linkedin} alt="" /></li>
                            </ul>
                        </div>
                        <div id="second">
                            <h4>Links</h4>
                            <Link to="">Home</Link>
                            <Link to="">Pricing</Link>
                            <Link to="">Download</Link>
                            <Link to="">About</Link>
                            <Link to="">Service</Link>
                        </div>

                        <div id="third">
                            <h4>Support</h4>
                            <Link to="">FAQ</Link>
                            <Link to="">How it</Link>
                            <Link to="">Features</Link>
                            <Link to="">Reporting</Link>
                        </div>

                        <div id="fourth">
                            <h4>Contact Us</h4>
                            <Link to="">+ 880 12345678</Link>
                            <Link to="">youremail@gmail.com</Link>
                            <Link to="">Pune City</Link>
                        </div>


                    </div>
                    <div className="bottom">
                        <p>Copyright & Design By @Learning Exp.</p>
                        <div><Link to="TermCondition">Term of use</Link> | <Link to="PrivacyPolicy">Privacy Policy</Link></div>
                    </div>
                </div>
            </footer>
        </>
    );
}

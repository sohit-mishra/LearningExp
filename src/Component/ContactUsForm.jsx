import './ContactFormModule.css';
export default function ContactUsForm() {
    return (
        <>
            <div className="box">
                <div className="left">
                    <h2>Contact Us!</h2>
                    <p>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</p>
                </div>
                <div className="right">
                    <input type="email" placeholder='Email here'/>
                    <div className="btn"><button>Send</button></div>
                </div>
            </div>
        </>
    )
}

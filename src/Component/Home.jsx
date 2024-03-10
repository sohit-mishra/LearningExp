import Certificate from "./Certificate"
import ContactUsForm from "./ContactUsForm"
import Feedback from "./Feedback"
import Career from "./Career"
import Learning from "./Learning"
import Header from "./Header"

export default function Home() {
  return (
    <div>
      <Header/>
      <Learning/>
      <Career/>
      <Certificate/>
      <Feedback/>
      <ContactUsForm/> 
    </div>
  )
}

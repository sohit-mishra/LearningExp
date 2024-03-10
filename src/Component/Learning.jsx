import smartphone from '../assets/smartphone.svg';
import Dashboard from '../assets/Dashboard.svg';
import layout from '../assets/layout.svg';
import './LearningModule.css';

export default function Learning() {
  return (
    <div className='container Learning'>
        <h1>We provide various kind of learning modules for you</h1>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. </p>
        <div className="flex">
          <div className="card">
            <img src={smartphone} alt="" />
            <h4>Learn Anything</h4>
            <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of </p>
          </div>
          <div className="card">
            <img src={Dashboard} alt="" />
            <h4>Flexible Learning</h4>
            <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, </p>
          </div>
          <div className="card">
            <img src={layout} alt="" />
            <h4>Expert Connect</h4>
            <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum </p>
          </div>
        </div>


    </div>
  )
}

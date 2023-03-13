import './Card.css';
import emailIcon from '../ic_mail_outline.png';
import linkedinlIcon from '../Linkedin.png';
import twitterIcon from '../Twitter Square.png';
import fbIcon from '../Facebook Square.png';
import instaIcon from '../Instagram Square.png';
import githubIcon from '../Github Square.png';


function Card(props) {
  const { fullName, avatar, title, email, about, interests } = props.data;
  return (
    <div className='card'>
      <div className='imgwrapper'>
        <img src={avatar} alt={`${fullName}'s profile`} />
      </div>
      <div className='mainwrapper'>
      <h1>{fullName}</h1>
        <h3>{title}</h3>
        <p>{about}</p>
      <div className='btnwrapper'>
        <button type="button"><span id='mailspan'><img src={emailIcon} alt="mailicon" /></span>Email</button>
        <button type="button"><span id='linkedinspan'><img src={linkedinlIcon} alt="linkedinlicon" /></span>Linkedin</button>
        {/* <button type="button"><span id='mailspan'><img src={emailIcon} alt="mailicon" width="14" height="14" /></span>Email</button>
        <button type="button"><span id='linkedinspan'><img src={linkedinlIcon} alt="linkedinlicon" width="16" height="18" /></span>Linkedin</button> */}
      </div>
      <div className='cntwrapper'>
        <h2>About</h2>
        <p>{about}</p>
        <h2>Interests</h2>
        <p>{interests}</p>
      </div>
      </div>
      <div className='snswrapper'>
        <img src={twitterIcon} alt="twittericon" />
        <img src={fbIcon} alt="fbicon" />
        <img src={instaIcon} alt="instaicon" />
        <img src={githubIcon} alt="githubicon" />
      </div>
    </div>
  );
}

export default Card;


// "fullName": "Jane Doe",
// "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
// "title": "Frontend Developer",
// "email": "janedoe@gmail.com",
// "about":"I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
// "interests": "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."

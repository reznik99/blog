import "./Footer.css"
import heart from '../Res/heart.svg'
import react from '../Res/react.svg'
import coffee from '../Res/coffee.svg'
import email from '../Res/email.svg'
import github from '../Res/github.svg'
import linkedin from '../Res/linkedin.svg'


function Footer() {
    return (
        <footer>
            <h1>Socials</h1>
            <ul className="social_list">
                <li><a target="_blank" rel="noreferrer" href="mailto:goras.francesco@gmail.com"><img src={email} alt="email" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/reznik99"><img src={github} alt="github" /></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/francesco-gorini-b334861a6/"><img src={linkedin} alt="linkedin" /></a></li>
            </ul>
            <div className="credits">
                <p>Made with <img src={heart} alt="love" /> <img src={react} alt="react" /> and <img src={coffee} alt="coffee" /> by <a target="_blank" rel="noreferrer" href="https://francescogorini.com">Francesco Gorini</a></p>
                <p style={{ color: "gray" }}>Dec 2020</p>
            </div>
            <div>Icons made by <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    )
}

export default Footer;
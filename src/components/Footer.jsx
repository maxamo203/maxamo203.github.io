import { ContactForm } from "./ContactForm";
import {FaWhatsapp, FaLinkedin, FaTelegram} from 'react-icons/fa';
function Footer() {
    return (
        <footer>
            <div id="contacto" className="section">
                <h3>'Contact me'</h3>
                <ContactForm />
                <h3 style={{marginTop:'10%'}}>'Social Media'</h3>
                <div id="socialMediaContainer">
                    <a href="https://wa.me/5491165445866" target="_blank"><FaWhatsapp/></a>
                    <a href="https://www.linkedin.com/in/maximo-augusto-bosch-39523727a" target="_blank"><FaLinkedin/></a>
                    <a href="https://t.me/maximobosch" target="_blank"><FaTelegram/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
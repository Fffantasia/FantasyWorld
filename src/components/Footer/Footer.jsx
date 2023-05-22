import './footer.css';
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsTwitch} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsReddit} from 'react-icons/bs'

function Footer(){
    return(
        <section className='footer-section'>
            <div className='footer-container'>
                <div className='footer-socials'>
                    <div className="social-item"><a><BsYoutube size={28}/></a></div>
                    <div className="social-item"><a><BsTwitch size={28}/></a></div>
                    <div className="social-item"><a><BsTwitter size={28}/></a></div>
                    <div className="social-item"><a><BsInstagram size={28}/></a></div>
                    <div className="social-item"><a><BsReddit size={28}/></a></div>
                </div>
                <div className="footer-copy">
                    <p>©2023 Fantasy Studios. Todos los derechos reservados.</p>
                </div>
                <div className='footer-contact'>
                    <div className="contact-item"><a>Aviso de privacidad</a></div>
                    <div className="contact-item"><a>Términos de uso</a></div>
                    <div className="contact-item"><a>Contacto</a></div>
                    <div className="contact-item"><a>Información de la empresa</a></div>
                    <div className="contact-item"><a>Política de cookies</a></div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
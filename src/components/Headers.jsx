import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa'

import Logo from '../assets/logo/logo.png'
import './Headers.css'

export default function header() {
  return (
    <header id='header-container'>
        <div id='header-contato'>
            <div className='header-contato-div'>
              <a href="tel:+5511999999999">
                <h3><FaPhone className='header-contato-icon'/>(21) 9 9999-9999</h3>
                
              </a>
              <h3>|</h3>
              <a href="href=mailto:exemplo@dominio.com?subject=Assunto%20do%20Email&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20...">
                <h3><FaEnvelope className='header-contato-icon'/>email@email.com</h3>
              </a>
            </div>
            <div className='header-contato-div'>
              <a href='#'>
                <FaInstagram className='header-contato-icon-social'/>
              </a>
              <a href='#'>
                <FaLinkedin className='header-contato-icon-social'/>
              </a>
            </div>
        </div>
        <div>
            <nav className='header-container-nav'>
            <Link to='/' id='header-link-logo'><img src={Logo} alt='logo HTMW'/></Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/servicos'>Serviços</Link></li>
                    <li><Link to='produtos'>Produtos</Link></li>
                    <li><Link to='contate'>Contato</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

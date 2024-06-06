import './Footer.css'
import { Link } from 'react-router-dom'
import Logopb from '../assets/logo/logopb.png'

export default function Footer() {
  return (
    <>
    <footer className='footer'>
        <div>
            <div className="footer-container">
                <div className="footer-logo">
                <img src={Logopb} alt="Logo HTMW"/>
                </div>
                <div className="footer-links">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/servicos'>Serviços</Link></li>
                        <li><Link to='produtos'>Produtos</Link></li>
                        <li><Link to='contate'>Contato</Link></li>
                    </ul>
                </nav>
                </div>
                <div className="footer-contact">
                <p>Entre em contato:</p>
                <ul>
                    <li><i className="fa fa-phone"></i> (XX) XXXX-XXXX</li>
                    <li><i className="fa fa-envelope"></i> contato@htmw.com.br</li>
                </ul>
                </div>
                <div className="footer-social">
                <ul>
                    <li><a href="https://www.instagram.com/htmw" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/htmw" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
            </div>
        </div>
            <p id='copy'>&copy; HTMW - Todos os direitos reservados - 2024</p>
            <a href="https://yagohenriqu3.github.io/yagohenriquefeitosa/" target='_blank'>
                <p id='copy'>Site desenvolvido por Yago Henrique</p>
            </a>  
    </footer>
    </>
    )
}

import { Link } from 'react-router-dom'
import './CardHome.css'

export default function CardHome({to, icon, titulo, paragrafo}) {
  return (
    <div id='cardhome-container'>
        <Link to={to}>
            <div>
                <div id='cardhome-icon'>{icon}</div>
                <div id='cardhome-texto'>
                    <h3>{titulo}</h3>
                    <p>{paragrafo}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

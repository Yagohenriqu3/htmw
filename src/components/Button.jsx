import './Button.css'
import { Link } from 'react-router-dom'

export default function Button({to, nome, especial}) {
  return (
    <>
    <Link to={to} className={`button ${especial ? 'button-especial' : ''}`}>
        <button>
            {nome}
        </button>
    </Link>
    </>

  )
}

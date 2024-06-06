import './QuemSomos.css'

import Imagem1 from '../../assets/home/quemsomos.jpg'

export default function QuemSomos() {
  return (
    <section id='quemsomos-container'>
        <div id='quemsomos-container2'>
            <div className='quemsomos-conteudo'>
                <img src={Imagem1} alt='entrada da empresa'/>
            </div>
            <div className='quemsomos-conteudo' id='quemsomos-paragrafo'>
                
                <p><h2>HTMW - Simplificando Vidas</h2>Desde a nossa fundação, a HTMW se destaca como referência em soluções educacionais. Nossa equipe é composta por profissionais apaixonados por educação, que trabalham incansavelmente para garantir que nossos clientes tenham acesso aos melhores recursos disponíveis no mercado.</p>
            </div>
        </div>
    </section>
  )
}

import './ContatoHome.css'
import Button from '../../components/Button'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContatoHome() {
  return (
    <section id='contatohome-container'>
      <div id='contatohome-container2'>
          <div className='contatohome-conteudo' id='contatohome-paragrafo'>
              <p>Estamos à disposição para esclarecer dúvidas, fornecer informações adicionais e ajudar sua instituição de ensino a alcançar novos patamares de excelência.</p>
              <div  id='contatohome-button'>
                <Button
                  to='/contate'
                  nome='Contate-nos'
                  especial={true}
                />
              </div>
          </div>
          <div id='contatohome-divisao'></div>
          <div className='contatohome-conteudo'  id='contatohome-contatos'>
            <p><FaPhone/> Telefone: (21) 9 9999-9999</p>
            <p>
            <FaEnvelope/> Email:
                 contato@htmw.com.br
            </p>
            <p><FaMapMarkerAlt/> Endereço: Rua Exemplo, 123, Bairro, Cidade, Estado</p>
          </div>
      </div>
    </section>
  )
}

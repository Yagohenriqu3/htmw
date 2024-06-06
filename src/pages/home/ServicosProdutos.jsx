import './ServicosProdutos.css'
import CardHome from "../../components/CardHome";
import { FaTools,FaShoppingCart } from 'react-icons/fa'

export default function ServicosProdutos() {
  return (
    <div id='servicosprodutos-container'>
      <CardHome 
        to='/servicos'
        icon=<FaTools/>
        titulo='Serviços'
        paragrafo='Oferecemos uma ampla gama de serviços de alta qualidade para atender às suas necessidades e superar suas expectativas.'
      />

      <CardHome 
        to='/produtos'
        icon=<FaShoppingCart/>
        titulo='Produtos'
        paragrafo='Temos uma ampla variedade de produtos de alta qualidade para atender às necessidades da sua instituição e superar suas expectativas.'
      />
      

    </div>
  )
}

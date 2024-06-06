import Button from '../../components/Button'
import './Home.css'

export default function BemVindo() {
  return (
    <section id="home-container">
    <div>
      <h1>Expertise em manutenção e insumos escolares de alta qualidade.</h1>
      <p>Na HTMW, nosso compromisso é com a educação de qualidade. Somos uma empresa dedicada a fornecer serviços e produtos escolares que fazem a diferença na formação de estudantes de todas as idades.</p>
      <Button
        to='/'
        nome='Fale conosco'
      />
    </div>
        
    </section>
  )
}

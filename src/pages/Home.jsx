import BemVindo from "./home/BemVindo";
import ContatoHome from "./home/ContatoHome";
import NossaMissao from "./home/NossaMissao";
import QuemSomos from "./home/QuemSomos";
import ServicosProdutos from './home/ServicosProdutos'

export default function Home() {
  return (
    <>
      <BemVindo/>
      <QuemSomos/>
      <NossaMissao/>
      <ServicosProdutos/>
      <ContatoHome/>
    </>
  )
}

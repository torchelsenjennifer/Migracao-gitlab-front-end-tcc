"use client";
import Depoimento from "@/componentes/depoimento";
import Depoimentos from "@/componentes/depoimento";
import Filtro from "@/componentes/filtro";
import Footer from "@/componentes/footer";
import Informacao from "@/componentes/informacao";
import InformacoesAluno from "@/componentes/informacaoAluno";
import InformacoesMentores from "@/componentes/informacaoMentor";
import MenuBar from "@/componentes/menubar";

export default function Home() {
  return (
    <main>
      <MenuBar />
	  <Informacao/>
      <Filtro />
	  <InformacoesMentores/>
	  <InformacoesAluno/>
	  <Depoimento/>
      <Footer />
    </main>
  );
}

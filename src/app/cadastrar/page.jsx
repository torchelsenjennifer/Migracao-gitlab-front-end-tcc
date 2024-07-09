"use client";

import Footer from "@/componentes/footer";
import Formulario from "@/componentes/formulario";
import MenuBar from "@/componentes/menubar";


const Cadastrar = () => {
  return (
    <main>
      <MenuBar showButtons={false}/>
	  <Formulario/>
	  <Footer/>
    </main>
  );
};

export default Cadastrar;

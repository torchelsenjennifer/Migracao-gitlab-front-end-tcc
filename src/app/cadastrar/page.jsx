"use client";

import Footer from "@/componentes/footer";
import Formulario from "@/componentes/formulario";
import MenuBar from "@/componentes/menubar";
import { useEffect, useState } from "react";


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

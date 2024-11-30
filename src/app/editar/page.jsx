"use client";

import Footer from "@/componentes/footer";
import Formulario from "@/componentes/formularioEditar";
import MenuBar from "@/componentes/menubar";
import { useEffect, useState } from "react";


const FormularioEditar = () => {
  return (
    <main>
      <MenuBar showButtons={false}/>
	  <Formulario/>
	  <Footer/>
    </main>
  );
};

export default FormularioEditar;
